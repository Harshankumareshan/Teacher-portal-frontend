// api.jsx

import axios from 'axios';

const API_URL = 'https://teacher-portal-backend.onrender.com';

export async function registerUser(userData) {
  try {
    const response = await axios.post(`${API_URL}/user/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Register User Error:', error.response || error.message);
    throw error.response ? error.response.data : new Error('Network error');
  }
}

export async function loginUser(userData) {
  try {
    const response = await axios.post(`${API_URL}/user/login`, userData);
    return response.data;
  } catch (error) {
    console.error('Login User Error:', error.response || error.message);
    throw error.response ? error.response.data : new Error('Network error');
  }
}

export async function getNotes(token) {
  try {
    const response = await axios.get(`${API_URL}/note`, {
      headers: { Authorization: ` ${token}` },
    });
    return response.data.data;
  } catch (error) {
    console.error('Get Notes Error:', error.response || error.message);
    throw error.response ? error.response.data : new Error('Network error');
  }
}

export async function createNote(noteData, token) {
  try {
    const response = await axios.post(`${API_URL}/note/create`, noteData, {
      headers: { Authorization: ` ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Create Note Error:', error.response || error.message);
    throw error.response ? error.response.data : new Error('Network error');
  }
}

export async function updateNoteById(noteId, updatedNote, token) {
  try {
    const response = await axios.patch(`${API_URL}/note/${noteId}`, updatedNote, {
      headers: { Authorization: ` ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Update Note Error:', error.response || error.message);
    throw error.response ? error.response.data : new Error('Network error');
  }
}

export async function deleteNoteById(noteId, token) {
  try {
    const response = await axios.delete(`${API_URL}/note/${noteId}`, {
      headers: { Authorization: ` ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Delete Note Error:', error.response || error.message);
    throw error.response ? error.response.data : new Error('Network error');
  }
}
