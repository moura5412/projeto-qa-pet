const API_BASE_URL = 'https://dogapi.dog/api/v2';

export const getBreeds = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/breeds`);
    if (!response.ok) {
      throw new Error('Erro ao buscar as raças de cachorros');
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Falha na requisição da API de raças:", error);
    return [];
  }
};