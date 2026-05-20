export default function TalaveraCeramicsWebsite() {
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
          <source
            src="/ceramica.mp4"
            type="video/mp4"
          />
        </video>

        {/* CAPA OSCURA */}
        <div className="absolute inset-0 bg-black/50" />

        {/* CONTENIDO */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

          <h1 className="text-5xl md:text-7xl text-white font-light tracking-wide mb-6">
            Cerámica de Talavera
          </h1>

          <p className="text-white text-lg md:text-2xl max-w-2xl leading-relaxed mb-8">
            Tradición pintada a mano desde el corazón de Talavera de la Reina.
          </p>

          <div className="flex gap-4 flex-wrap justify-center">

            <button className="bg-white text-black px-8 py-4 rounded-2xl text-lg hover:scale-105 transition-transform shadow-xl">
              Descubrir colección
            </button>

            <button className="border border-white text-white px-8 py-4 rounded-2xl text-lg hover:bg-white hover:text-black transition-all">
              Ver proceso artesanal
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
              La cerámica de Talavera de la Reina es una de las expresiones
              artesanales más reconocidas de España.
            </p>

            <p className="text-lg leading-9 text-gray-700">
              Cada pieza es pintada a mano por artesanos que mantienen viva una
              tradición transmitida de generación en generación.
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
      <section className="py-24 px-6 md:px-20 bg-[#eef4ff]">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl md:text-5xl text-center text-[#1d4f91] mb-16">
            Galería artesanal
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <img
              src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1200&auto=format&fit=crop"
              className="rounded-3xl h-[450px] w-full object-cover shadow-xl"
              alt="Cerámica"
            />

            <img
              src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1200&auto=format&fit=crop"
              className="rounded-3xl h-[450px] w-full object-cover shadow-xl"
              alt="Azulejos"
            />

            <img
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop"
              className="rounded-3xl h-[450px] w-full object-cover shadow-xl"
              alt="Taller"
            />

          </div>

        </div>
      </section>

      {/* PROCESO */}
      <section className="py-24 px-6 md:px-20 bg-white">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl text-[#1d4f91] mb-16">
            El proceso artesanal
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              {
                title: "Diseño",
                text: "Cada pieza comienza con un boceto inspirado en patrones tradicionales.",
              },
              {
                title: "Esmaltado",
                text: "La cerámica recibe una capa de esmalte para preparar el acabado.",
              },
              {
                title: "Pintura",
                text: "Los artesanos pintan cada detalle completamente a mano.",
              },
              {
                title: "Cocción",
                text: "Las piezas se cuecen en horno para fijar los colores y el brillo.",
              },
            ].map((step, index) => (

              <div
                key={index}
                className="bg-[#f8f5ef] rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition-transform"
              >

                <div className="text-5xl text-[#1d4f91] mb-6">
                  0{index + 1}
                </div>

                <h3 className="text-2xl mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-700 leading-8">
                  {step.text}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* CONTACTO */}
      <section className="py-24 px-6 md:px-20 bg-[#1d4f91] text-white">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl mb-8">
            Encargos personalizados
          </h2>

          <p className="text-xl leading-9 mb-12 text-blue-100">
            Creamos murales, vajillas y piezas únicas adaptadas a cada espacio.
          </p>

          <form className="grid gap-6">

            <input
              type="text"
              placeholder="Nombre"
              className="p-5 rounded-2xl text-black"
            />

            <input
              type="email"
              placeholder="Correo electrónico"
              className="p-5 rounded-2xl text-black"
            />

            <textarea
              placeholder="Cuéntanos tu idea"
              rows={5}
              className="p-5 rounded-2xl text-black"
            />

            <button className="bg-white text-[#1d4f91] py-5 rounded-2xl text-lg hover:scale-105 transition-transform shadow-xl">
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