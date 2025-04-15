// Importa os módulos necessários do React e React Native
import React, { useState } from 'react'; 
import { View, Text, TextInput, Button, StyleSheet, FlatList, Keyboard } from 'react-native';
// Importa a função que busca os dados do clima a partir de uma API externa
import { getWeather } from './weatherApi';

// Função utilitária para normalizar o nome da cidade removendo acentos e diacríticos
const normalizeCityName = (city: string) => {
    return city.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Remove apenas os diacríticos
};

const App = () => {
    // Estado para armazenar o nome da cidade digitado pelo usuário
    const [city, setCity] = useState('');
    // Estado para armazenar os dados do clima retornados pela API
    const [weather, setWeather] = useState<any>(null);
    // Estado para controlar se a requisição está em andamento
    const [loading, setLoading] = useState(false);
    // Estado para mensagens de erro
    const [error, setError] = useState<string | null>(null);

    // Função que busca os dados do clima
    const fetchWeather = async () => {
        // Verifica se o campo de cidade está vazio
        if (!city.trim()) {
            setError('Por favor, digite o nome de uma cidade.');
            return;
        }

        setLoading(true); // Ativa o estado de carregamento
        setError(null); // Limpa possíveis mensagens de erro

        try {
            const formattedCity = normalizeCityName(city); // Normaliza o nome da cidade
            const data = await getWeather(formattedCity); // Faz a requisição à API
            if (data) setWeather(data); // Atualiza o estado com os dados recebidos
        } catch (err) {
            setError('Não foi possível obter os dados do tempo.'); // Trata possíveis erros
        } finally {
            setLoading(false); // Desativa o estado de carregamento
        }
    };

    // Chamada ao buscar o clima pressionando "Enter" no teclado
    const handleSubmitEditing = () => {
        fetchWeather();
        Keyboard.dismiss(); // Fecha o teclado virtual
    };

    // Formata os dados do clima em uma lista legível para exibição
    const weatherData = weather
        ? [
            { label: 'Cidade, Estado', value: `${weather.location.name}, ${weather.location.region}` },
            { label: 'País', value: `${weather.location.country}` },
            { label: 'Temperatura', value: `${weather.current.temp_c}°C` },
            { label: 'Condição', value: `${weather.current.condition.text}` },
        ]
        : [];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>🌤️ CLIMA AGORA</Text>

            {/* Campo de entrada para o nome da cidade */}
            <TextInput
                style={styles.input}
                value={city}
                onChangeText={setCity}
                placeholder="Busque por uma cidade..."
                onSubmitEditing={handleSubmitEditing}
                returnKeyType="done"
            />

            {/* Botão para buscar o clima */}
            <Button title="Buscar Clima" onPress={fetchWeather} color="#000080"/>

            {/* Exibe mensagem de carregamento */}
            {loading && <Text>Carregando...</Text>}

            {/* Exibe mensagem de erro, se houver */}
            {error && <Text style={styles.error}>{error}</Text>}

            {/* Exibe os dados do clima, se disponíveis */}
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

// Estilos da interface definidos com StyleSheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginTop: 0,
        backgroundColor: '#87CEEB', // Azul claro (SkyBlue)
    },
    title: { color: 'black', fontSize: 30, fontWeight: 'bold', marginBottom: 10 },
    input: { width: '80%', padding: 10, borderWidth: 1, borderRadius: 5, marginBottom: 10, backgroundColor: '#fff' },
    result: { marginTop: 30, alignItems: 'center' },
    city: { fontSize: 20, fontWeight: 'bold' },
    temp: { fontSize: 24, fontWeight: 'bold' },
    error: { color: 'red', marginTop: 10 },
});


// Exporta o componente principal
export default App;
