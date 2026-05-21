"use client";

import { useState } from "react";

export default function TalaveraCeramicsWebsite() {
  const [pieza, setPieza] = useState("Plato artesanal");
  const [color, setColor] = useState("#1d4f91");
  const talleres = [
    {
      titulo: "Pintura tradicional talaverana",
      nivel: "Iniciación",
      duracion: "3 horas",
      plazas: "12 plazas",
    },
    {
      titulo: "Creación de azulejos artesanales",
      nivel: "Intermedio",
      duracion: "5 horas",
      plazas: "8 plazas",
    },
    {
      titulo: "Masterclass mural cerámico",
      nivel: "Avanzado",
      duracion: "1 día completo",
      plazas: "6 plazas",
    },
  ];

  const galeria = [
    "/talavera1.jpg",
    "/talavera2.jpg",
    "/talavera3.jpg",
    "/talavera4.jpg",
    "/talavera5.jpg",
    "/talavera6.jpg",
  ];

  return (
    <div className="bg-[#f8f5ef] text-[#1f2937] min-h-screen font-serif">
      {/* HERO VIDEO */}
      <section className="relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/ceramica.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-5xl md:text-7xl text-white font-light tracking-wide mb-6">
            Cerámica de Talavera
          </h1>

          <p className="text-white text-lg md:text-2xl max-w-2xl leading-relaxed mb-8">
            Tradición pintada a mano desde el corazón de Talavera de la Reina.
          </p>

          <div className="flex gap-4 flex-wrap justify-center">
            <button
              onClick={() => {
                const section = document.getElementById('galeria');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-black px-8 py-4 rounded-2xl text-lg hover:scale-105 transition-transform shadow-xl"
            >
              Descubrir colección
            </button>

            <button
              onClick={() => {
                const section = document.getElementById('talleres');
                section?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border border-white text-white px-8 py-4 rounded-2xl text-lg hover:bg-white hover:text-black transition-all"
            >
              Reservar taller
            </button>
          </div>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-8 text-[#1d4f91]">
              Historia y tradición
            </h2>

            <p className="text-lg leading-9 text-gray-700 mb-6">
              La cerámica de Talavera de la Reina es una de las expresiones artesanales más reconocidas de España.
            </p>

            <p className="text-lg leading-9 text-gray-700">
              Cada pieza es pintada a mano por artesanos que mantienen viva una tradición transmitida de generación en generación.
            </p>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1600&auto=format&fit=crop"
              alt="Cerámica artesanal"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="py-24 px-6 md:px-20 bg-[#eef4ff]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center text-[#1d4f91] mb-16">
            Galería artesanal
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galeria.map((imagen, index) => (
              <img
                key={index}
                src={imagen}
                alt="Galería cerámica"
                className="rounded-3xl h-[420px] w-full object-cover shadow-xl hover:scale-105 transition-transform duration-500"
              />
            ))}
          </div>
        </div>
      </section>

      {/* TALLERES */}
      <section id="talleres" className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[#1d4f91] mb-6">
              Talleres artesanales
            </h2>

            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-8">
              Aprende las técnicas tradicionales de la cerámica talaverana junto a artesanos especializados.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {talleres.map((taller, index) => (
              <div
                key={index}
                className="bg-[#f8f5ef] rounded-3xl p-8 shadow-xl hover:-translate-y-2 transition-transform"
              >
                <div className="text-[#1d4f91] text-sm tracking-[0.3em] uppercase mb-4">
                  {taller.nivel}
                </div>

                <h3 className="text-2xl mb-6 leading-snug">
                  {taller.titulo}
                </h3>

                <div className="space-y-3 text-gray-700 mb-8">
                  <p>⏳ {taller.duracion}</p>
                  <p>👥 {taller.plazas}</p>
                </div>

                <button className="w-full bg-[#1d4f91] text-white py-4 rounded-2xl hover:opacity-90 transition-opacity">
                  Reservar plaza
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CREA TU PIEZA */}
      <section className="py-24 px-6 md:px-20 bg-[#0d2f57] text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl mb-8 leading-tight">
              Diseña tu propia pieza
            </h2>

            <p className="text-xl text-blue-100 leading-9 mb-8">
              Personaliza colores, patrones y formas inspiradas en la tradición cerámica de Talavera.
            </p>

            <div className="space-y-4 text-blue-100 text-lg">
              <p>✓ Elige el tipo de pieza</p>
              <p>✓ Personaliza colores y detalles</p>
              <p>✓ Visualiza el diseño en tiempo real</p>
              <p>✓ Envía tu creación al taller</p>
            </div>
          </div>

          <div className="bg-white rounded-[40px] p-10 text-black shadow-2xl">
            <div
              className={`aspect-square flex items-center justify-center relative overflow-hidden bg-[#f8f5ef] shadow-inner ${
                pieza === 'Azulejo'
                  ? 'rounded-[30px] border-[18px] border-[#1d4f91]'
                  : 'rounded-full border-[18px] border-[#1d4f91]'
              }`}
            >
              <img
                src={
                  pieza === 'Azulejo'
                    ? '/azulejo-talavera.jpg'
                    : pieza === 'Taza cerámica'
                    ? '/taza-talavera.jpg'
                    : '/plato-talavera.jpg'
                }
                alt="Diseño cerámico"
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              />

              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: color,
                  opacity: 0.25,
                }}
              />

              <div className="relative z-10 text-center text-white bg-black/40 px-6 py-3 rounded-2xl backdrop-blur-sm">
                <div className="text-2xl font-semibold mb-2">
                  {pieza}
                </div>
                <div className="text-sm tracking-widest uppercase">
                  Diseño personalizado
                </div>
              </div>
            </div>

            <div className="mt-10 space-y-5">
              <select
                value={pieza}
                onChange={(e) => setPieza(e.target.value)}
                className="w-full p-4 rounded-2xl border border-gray-200"
              >
                <option>Plato artesanal</option>
                <option>Azulejo</option>
                <option>Taza cerámica</option>
              </select>

              <select
                onChange={(e) => setColor(e.target.value)}
                className="w-full p-4 rounded-2xl border border-gray-200"
              >
                <option value="#1d4f91">Azul Talavera</option>
                <option value="#0ea5e9">Turquesa</option>
                <option value="#2563eb">Azul intenso</option>
                <option value="#7dd3fc">Azul claro</option>
              </select>

              <button
                onClick={() => {
                  alert(`Tu diseño de ${pieza} ha sido creado correctamente.`);
                }}
                className="w-full bg-[#1d4f91] text-white py-5 rounded-2xl text-lg hover:scale-[1.02] transition-transform"
              >
                Crear diseño personalizado
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl mb-8 text-[#1d4f91]">
            Encargos personalizados
          </h2>

          <p className="text-xl leading-9 mb-12 text-gray-700">
            Creamos murales, vajillas y piezas únicas adaptadas a cada espacio.
          </p>

          <form className="grid gap-6">
            <input
              type="text"
              placeholder="Nombre"
              className="p-5 rounded-2xl border border-gray-200"
            />

            <input
              type="email"
              placeholder="Correo electrónico"
              className="p-5 rounded-2xl border border-gray-200"
            />

            <textarea
              placeholder="Cuéntanos tu idea"
              rows={5}
              className="p-5 rounded-2xl border border-gray-200"
            />

            <button className="bg-[#1d4f91] text-white py-5 rounded-2xl text-lg hover:scale-105 transition-transform shadow-xl">
              Solicitar información
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0d2f57] text-blue-100 py-8 text-center text-sm tracking-wide">
        © 2026 Cerámica de Talavera · Artesanía tradicional española
      </footer>
    </div>
  );
}
