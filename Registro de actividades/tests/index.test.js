import supertest from 'supertest';
import app from '../app.js';
import {
  getActivitys,
  insertActivity,
  deleteActivity,
  editActivity,
  getActivityId
} from '../controllers/index.controller.js';
import { pool } from '../index.js';

jest.mock('../controllers/index.controller.js'); // Mock de los controladores

describe('Validacion CRUD', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Limpia los mocks después de cada prueba
  });

  test('Deberia devolver resultados', async () => {
    const response = await supertest(app).get('/ver');
    expect(response.status).toBe(200);
  });

  test('Deberia devolver un resultado', async () => {
    const response = await supertest(app).get('/ver/101');
    expect(response.status).toBe(200);
  });

  test('verifica entrada de datos', async () => {
    const req = {
      body: {
        actividad_id: 110,
        titulo: 'Activity 1',
        fecha: '2022-01-01',
        hora: '12:00',
        registrado_por: 'John Doe'
      }
    };
    const res = { send: jest.fn() }; // Mock de la función send
    await insertActivity(req, res);
    expect(res.send).toHaveBeenCalledWith('La operación de inserción fue exitosa.');
  });

  test.only('verificar eliminacion de datos', async () => {
        const id = 105;
        const req = { params: { id } };
        const res = { send: jest.fn() }; // Mockear la función send de res
        const result = { command: 'DELETE' }; // Simulación del resultado esperado

        // Configurar el mock de deleteActivity para que resuelva con el resultado
        deleteActivity.mockResolvedValueOnce(result);

        // Ejecutar la función deleteActivity con los mocks de req y res
        await deleteActivity(req, res);

        // Verificar que res.send se llamó con el mensaje esperado
        expect(res.send).toHaveBeenCalledWith('Actividad eliminada');
    });

  test('actualizacion de datos', async () => {
    const values = {
      id: 110,
      titulo: 'CRUD',
      fecha: '2024-04-21',
      hora: '17:00:00-05:00',
      registrado_por: 'Andrés López'
    };
    const consulta = { rows: [{ titulo: 'CRUD' }] }; // Mock de la consulta
    pool.query.mockResolvedValueOnce(consulta); // Configura el mock para resolver con la consulta
    await editActivity({ params: { id: values.id }, body: values });
    console.log('Datos actualizados');
  });
});