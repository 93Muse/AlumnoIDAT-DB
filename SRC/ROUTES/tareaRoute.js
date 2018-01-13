const Tarea = require('../models/tarea');

module.exports = function (app){

  app.get('/tarea', (req, res) => {

    Tarea.getTarea((err, data) => {
      res.status(200).json({'tareas': data});
    });
  });

  app.get('/tareas', (req, res) => {

    Tarea.getTareaActual((err, data) => {
      res.status(200).json({'tareas': data});
    });
  });

  app.get('/tarea/:id', (req, res) =>{
    const tareaData = {
      id: req.params.id
    };

    Tarea.getTareaId(tareaData,(err, data) =>{
      res.status(200).json({'tareas': data});
    });
  });

  app.post('/tarea', (req, res) =>{
    const tareaData = {
      tarea_id: null,
      tarea_titulo: req.body.tarea_titulo,
      tarea_descripcion: req.body.tarea_descripcion,
      tarea_curso: req.body.tarea_curso,
      tarea_profesor: req.body.tarea_profesor,
      tarea_vencimiento: req.body.tarea_vencimiento,
      tarea_estado: req.body.tarea_estado
    };

    Tarea.insertTarea(tareaData, (err,data) =>{
      if(data && data.insertId){
        res.json({
          success: true,
          msg: 'Tarea insertada',
          data: data
        })
      }
    })
  });

  app.put('/tarea/:id', (req, res) =>{
    const tareaData = {
      tarea_id: req.params.tarea_id,
      tarea_titulo: req.body.tarea_titulo,
      tarea_descripcion: req.body.tarea_descripcion,
      tarea_curso: req.body.tarea_curso,
      tarea_profesor: req.body.tarea_profesor,
      tarea_vencimiento: req.body.tarea_vencimiento,
      tarea_estado: req.body.tarea_estado
    };

    Tarea.updateTarea(tareaData, (err, data) =>{
      if(data && data.msg){
        res.json(data)
      } else {
        res.json({
          success: false,
          msg: 'error'
        })
      }
    })
  });

  app.delete('/tarea/:id', (req, res)=>{
    Tarea.deleteTarea(req.params.id, (err, data) =>{
      if(data && data.msg === 'Tarea eliminada' || data.msg == 'La tarea seleccionada no existe'){
        res.json({
          success: true,
          data
        })
      } else {
        res.status(500).json({
          msg: 'Error'
        })
      }
    });
  });
}
