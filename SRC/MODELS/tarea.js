const mysql =  require('mysql');

connection = mysql.createConnection({
  host:'localhost',
  user: 'root',
  password: '',
  database: 'dbnotificaciones'
});

let cursomodel = {};

cursomodel.getTarea = (callback) => {
  if(connection){
    connection.query('SELECT * FROM tarea', (err, rows) => {
      if(err){
        throw err;
      } else {
        callback(null, rows);
      }
    })
  }
};

cursomodel.getTareaActual = (callback) => {
  if(connection){
    connection.query('SELECT * FROM tarea where tarea_vencimiento > now() and tarea_estado = 1', (err, rows) => {
      if(err){
        throw err;
      } else {
        callback(null, rows);
      }
    })
  }
};


cursomodel.getTareaId = (tareaData, callback) => {
  if(connection){
    const sql =`SELECT * FROM tarea WHERE tarea_id = ${connection.escape(tareaData.id)}`
    connection.query(sql,(err,rows) =>{
      if(err){
        throw err;
      }else {
        callback(null, rows);
      }
    })
  }
};

cursomodel.insertTarea = (tareaData, callback) => {
  if(connection){
    connection.query('INSERT INTO tarea SET ?', tareaData, (err, result) => {
      if(err){
        throw err;
      } else {
        callback(null, { 
          'insertId': result.insertId 
        })
      }
    })
  }
};

cursomodel.updateTarea = (tareaData, callback) =>{
  if (connection){
    const sql = `UPDATE tarea SET
    tarea_titulo = ${connection.escape(tareaData.titulo)},
    tarea_descripcion = ${connection.escape(tareaData.descripcion)},
    tarea_curso = ${connection.escape(tareaData.curso)},
    tarea_profesor = ${connection.escape(tareaData.profesor)},
    tarea_vencimiento = ${connection.escape(tareaData.vencimiento)},
    tarea_estado = ${connection.escape(tareaData.estado)}
    WHERE tarea_id = ${connection.escape(tareaData.id)}
    `
    connection.query(sql,(err,result) => {
      if(err){
        throw err;
      } else {
        callback(null, {
          "msg":"Tarea Actualizada"
        });
      }
    })
  }
};

cursomodel.deleteTarea = (id, callback) =>{
  if(connection){
    var sqlExists = `
      SELECT * FROM tarea WHERE tarea_id = ${connection.escape(id)}
    `;
    connection.query(sqlExists,(err, row) =>{
      if(row){
        const sql = `
        DELETE FROM tarea WHERE tarea_id = ${connection.escape(id)}
        `;
        connection.query(sql, (err, result) =>{
          if(err){
            throw err;
          }else {
            callback(null,{
              msg: 'Tarea eliminada'
            })
          }
        })
      }else{
        callback(null, {
          msg: 'La tarea no existe'
        })
      }
    })
  }
}

module.exports = cursomodel;