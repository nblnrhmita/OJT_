// import db from "../../lib/db.js";

// export function createPendaftaran(data) {
//   return new Promise((resolve, reject) => {
//     const sql = `
//       INSERT INTO pendaftaran_beasiswa
//       (nama, email, no_hp, pendidikan, beasiswa, alasan)
//       VALUES (?, ?, ?, ?, ?, ?)
//     `;

//     db.query(
//       sql,
//       [
//         data.nama,
//         data.email,
//         data.no_hp,
//         data.pendidikan,
//         data.beasiswa,
//         data.alasan,
//       ],
//       (err, result) => {
//         if (err) return reject(err);
//         resolve({ id: result.insertId, ...data });
//       }
//     );
//   });
// }

// export function findByEmail(email) {
//   return new Promise((resolve, reject) => {
//     const sql = `
//       SELECT * FROM pendaftaran_beasiswa WHERE email = ?
//     `;
//     db.query(sql, [email], (err, results) => {
//       if (err) return reject(err);
//       resolve(results[0]);
//     });
//   });
// }
