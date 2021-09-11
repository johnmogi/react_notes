const dal = require("../data/access-layer.js");

async function getAllNotesAsync() {
  const sql = "SELECT * FROM notes";

  const notes = await dal.executeAsync(sql);

  return notes;
}
// async function getOneNoteAsync(id) {
//     const sql = `SELECT * FROM notes WHERE noteID = ${id}`;
//     const notes = await dal.executeAsync(sql);
//     return notes;
// }
// async function addOneNotesAsync(data) {

//     const sql = `INSERT INTO notes (noteName, noteAddress, notePhone, noteMail) VALUES ('${data.noteAddress}', '${data.noteName}', '${data.notePhone}', '${data.noteMail}')`;
//     const notes = await dal.executeAsync(sql);
//     return notes;
// }

// async function deleteOneNoteAsync(id) {
//     const sql = `DELETE FROM notes WHERE noteID = ${id}`;
//     const note = await dal.executeAsync(sql);
//     return note;
// }

// async function updateFullNoteAsync(data) {
//     const sql = `UPDATE notes SET noteName = '${data.noteName}', noteAddress = '${data.noteAddress}', notePhone = '${data.notePhone}', noteMail = '${data.noteMail}' WHERE noteID = ${data.noteID}`;
//     const info = await dal.executeAsync(sql);
//     return info.affectedRows === 0 ? null : data;
// }

// async function updatePartialNoteAsync(note) {

//     let sql = "UPDATE notes SET ";

//     if(note.noteName) {
//         sql += `noteName = '${note.noteName}',`
//     }
//     if(note.noteAddress) {
//         sql += `noteAddress = '${note.noteAddress}',`
//     }
//     if(note.notePhone) {
//         sql += `UnitsInStock = '${note.notePhone}',`
//     }

//     // Delete last comma:
//     sql = sql.substr(0, sql.length - 1);

//     sql += ` WHERE noteID = ${note.noteID}`;

//     const info = await dal.executeAsync(sql);
//     return info.affectedRows === 0 ? null : note;
// }

module.exports = {
  getAllNotesAsync,
  // getOneNoteAsync, addOneNotesAsync, deleteOneNoteAsync,
  // updateFullNoteAsync, updatePartialNoteAsync
};
