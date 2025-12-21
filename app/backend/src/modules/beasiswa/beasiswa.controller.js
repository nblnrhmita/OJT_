// import {
//   createPendaftaran,
//   findByEmail,
// } from "./beasiswa.model.js";

// export async function daftarBeasiswa(req, res) {
//   try {
//     const { nama, email, no_hp, pendidikan, beasiswa, alasan } = req.body;

//     // Validasi input
//     if (!nama || !email || !beasiswa) {
//       return res.status(400).json({
//         success: false,
//         message: "Data wajib belum lengkap",
//       });
//     }

//     // Cek apakah email sudah pernah mendaftar
//     const exists = await findByEmail(email);
//     if (exists) {
//       return res.status(400).json({
//         success: false,
//         message: "Email sudah digunakan untuk pendaftaran",
//       });
//     }

//     const newPendaftaran = await createPendaftaran({
//       nama,
//       email,
//       no_hp,
//       pendidikan,
//       beasiswa,
//       alasan,
//     });

//     res.status(201).json({
//       success: true,
//       message: "Pendaftaran beasiswa berhasil",
//       data: newPendaftaran,
//     });
//   } catch (error) {
//     console.error("Daftar Beasiswa error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Terjadi kesalahan server",
//       error:
//         process.env.NODE_ENV === "development"
//           ? error.message
//           : undefined,
//     });
//   }
// }
