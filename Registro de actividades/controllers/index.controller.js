import pool from '../index.js';

const getActivitys = async (req, res) => {
    try{
        const response = await pool.query('select * from actividades');
        console.log(response.command, response.rowCount, response.rows);
        res.status(200).json(response.rows);
    } catch(e){
        console.log(e);
    }
}

const insertActivity = async (req, res) => {
    try{
        const { actividad_id, titulo, fecha, hora, registrado_por } = req.body;
        const response = await pool.query('INSERT INTO actividades VALUES($1, $2, $3, $4, $5)', [actividad_id, titulo, fecha, hora, registrado_por]);
        res.send('Actividad creada');
        return response;
    } catch(e){
        console.log(e);
    }
}

const getActivityId = async (req, res) => {
    try{
        const response = await pool.query('select * from actividades where actividad_id=$1', [req.params.id]);
        res.status(200).json(response.rows);
    } catch(e){
        console.log(e);
    }
}

const deleteActivity = async (req, res) => {
    try{
        const id = req.params.id;
        const response = await pool.query('DELETE FROM actividades WHERE actividad_id=$1', [id]);
        console.log('Se elimino '+id);
        res.send('Actividad eliminada');
        return response;
    } catch(e){
        console.log(e);
    }
}

'Se completo la palabra: '+ final

export {getActivitys, insertActivity, deleteActivity, editActivity, getActivityId}; 