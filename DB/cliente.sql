drop database if exists dbnotificaciones;
create database dbnotificaciones;
use dbnotificaciones;

create table tarea(
	tarea_id int primary key not null auto_increment,
    tarea_titulo varchar(50) not null,
    tarea_descripcion varchar(100) not null,
    tarea_curso varchar(100) not null,
    tarea_profesor varchar(100),
    tarea_vencimiento datetime not null,
    tarea_estado int default 1
);
alter table tarea auto_increment = 1;

insert into tarea values (null, "Semana 01", "Presentar SQL Lite", "Android", "Profesor 1", "2017-12-20 20:00:00", 1);
insert into tarea values (null, "Semana 02", "Presentar Recycler View", "ITIL", "Profesor 2", "2017-12-20 20:00:00", 1);
insert into tarea values (null, "Semana 03", "Proyecto", "CRM", "Profesor 3", "2017-12-20 20:00:00", 1);
insert into tarea values (null, "Semana 04", "Proyecto II", "Android", "Profesor 4", "2017-12-17 20:00:00", 1);
insert into tarea values (null, "Semana 05", "Presentar informe", "ITIL", "Profesor 5", "2017-12-20 20:00:00", 1);
insert into tarea values (null, "Semana 06", "Exposicion", "Seguridad Informática", "Profesor 6", "2017-12-20 20:00:00", 1);
insert into tarea values (null, "Semana 07", "Elaborar reporte", "Creación de negocios", "Profesor 7", "2017-12-20 20:00:00", 1);
insert into tarea values (null, "Semana 08", "Elaborar matriz", "Android", "Profesor 8", "2017-12-20 20:00:00", 1);

insert into tarea values (null, "Semana 11", "Test Checked", "Android", "Profesor 8", "2017-12-20 20:00:00", 1);
insert into tarea values (null, "Semana 11", "Test Checked", "Android", "Profesor 8", "2018-12-20 20:00:00", 1);
insert into tarea values (null, "Semana 11", "Test Checked", "Android", "Profesor 8", "2018-12-20 20:00:00", 1);
insert into tarea values (null, "Semana 11", "Test Checked", "Android", "Profesor 8", "2018-12-20 20:00:00", 1);
insert into tarea values (null, "Semana 11", "Test Checked", "Android", "Profesor 8", "2018-12-20 20:00:00", 1);

select * from tarea;
select * from tarea where tarea_vencimiento > now();
select * from tarea order by tarea_vencimiento asc;

