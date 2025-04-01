// app/(tabs)/index.tsx

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Keyboard } from 'react-native';
import { getWeather } from './weatherApi'; // Ajuste o caminho conforme necessário

const App = () => {
    const [city, setCity] = useState('Sao Paulo');
    const [weather, setWeather] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // UseEffect para buscar clima ao iniciar
    useEffect(() => {
        fetchWeather();
    }, []);

    const fetchWeather = async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await getWeather(city);
            if (data) setWeather(data);
        } catch (err) {
            setError('Não foi possível obter os dados do tempo.');
        } finally {
            setLoading(false);
        }
    };

    // Preparando os dados para o FlatList
    const weatherData = [
        { label: 'Cidade', value: `${weather?.location.name}, ${weather?.location.country}` },
        { label: 'Temperatura', value: `${weather?.current.temp_c}°C` },
        { label: 'Condição', value: `${weather?.current.condition.text}` },
    ];

    // Função que é chamada ao pressionar "Enter"
    const handleSubmitEditing = () => {
        fetchWeather();
        Keyboard.dismiss(); // Fecha o teclado após o "Enter"
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>🌤️ Previsão do Tempo Agora</Text>

            <TextInput
                style={styles.input}
                value={city}
                onChangeText={setCity}
                placeholder="Digite a cidade"
                onSubmitEditing={handleSubmitEditing} // Dispara a função ao pressionar "Enter"
                returnKeyType="done" // Define o tipo de tecla de retorno como "Done" (Concluído)
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
    error: { color: 'red' },
});

export default App;
