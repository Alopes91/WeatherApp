import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Keyboard } from 'react-native';
import { getWeather } from './weatherApi';

const normalizeCityName = (city: string) => {
    return city.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Remove apenas os diacríticos
};

const App = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchWeather = async () => {
        if (!city.trim()) {
            setError('Por favor, digite uma cidade.');
            return;
        }

        setLoading(true);
        setError(null);
        try {
            const formattedCity = normalizeCityName(city); // Normaliza a entrada
            const data = await getWeather(formattedCity);
            if (data) setWeather(data);
        } catch (err) {
            setError('Não foi possível obter os dados do tempo.');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmitEditing = () => {
        fetchWeather();
        Keyboard.dismiss();
    };

    const weatherData = weather
        ? [
            { label: 'Cidade', value: `${weather.location.name}, ${weather.location.country}` },
            { label: 'Temperatura', value: `${weather.current.temp_c}°C` },
            { label: 'Condição', value: `${weather.current.condition.text}` },
        ]
        : [];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>🌤️ Previsão do Tempo Agora</Text>

            <TextInput
                style={styles.input}
                value={city}
                onChangeText={setCity}
                placeholder="Digite a cidade"
                onSubmitEditing={handleSubmitEditing}
                returnKeyType="done"
            />
            <Button title="Buscar Clima" onPress={fetchWeather} />

            {loading && <Text>Carregando...</Text>}
            {error && <Text style={styles.error}>{error}</Text>}

            {weather && (
                <FlatList
                    data={weatherData}
                    keyExtractor={(item) => item.label}
                    renderItem={({ item }) => (
                        <View style={styles.result}>
                            <Text style={styles.city}>{item.label}: </Text>
                            <Text style={styles.temp}>{item.value}</Text>
                        </View>
                    )}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, marginTop: 50 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    input: { width: '80%', padding: 10, borderWidth: 1, borderRadius: 5, marginBottom: 10 },
    result: { marginTop: 30, alignItems: 'center' },
    city: { fontSize: 20, fontWeight: 'bold' },
    temp: { fontSize: 26, fontWeight: 'bold' },
    error: { color: 'red', marginTop: 10 },
});

export default App;
