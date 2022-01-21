'use strict';
const dbConn = require('../db/db');

const Postre = function (postre) {
    this.nombre = postre.nombre;
    this.descripcion = postre.descripcion;
    this.precio = postre.precio;
    this.imagen = postre.imagen;
};
Postre.create = function (newPostre, result) {
    dbConn.query("INSERT INTO postre set ?", newPostre, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Postre.findById = function (id, result) {
    dbConn.query("Select * from postre where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
Postre.findAll = function (result) {
    dbConn.query("Select * from postre", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Postre.update = function (id, postre, result) {
    dbConn.query("UPDATE postre SET nombre=?,descripcion=?,precio=?,imagen=? WHERE id = ?", [postre.nombre, postre.descripcion, postre.precio, postre.imagen, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
Postre.delete = function (id, result) {
    dbConn.query("DELETE FROM postre WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
module.exports = Postre;