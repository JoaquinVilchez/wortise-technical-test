'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Article() {
  return (
    <>
      <div className="relative">
        <Image
          src="https://images.pexels.com/photos/29241269/pexels-photo-29241269/free-photo-of-shinkansen-moderno-en-una-estacion-de-tren-muy-concurrida.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="w-full object-cover rounded-lg h-30 md:h-80"
          width={1080}
          height={720}
          alt="Imagen de un tren"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent rounded-lg" />

        <p className="absolute bottom-0 w-full text-white text-2xl md:text-4xl font-bold px-10 pb-4">
          Avances en la Tecnología de Trenes de Alta Velocidad
        </p>
      </div>
      <div>
        <div className="flex justify-between items-center my-5 text-sm text-gray-800">
          <p>Publicado el 15 de octubre de 2023</p>
          <div>
            <Link href="/author/1" className="flex items-center gap-2">
              <Image
                src="/avatar.svg"
                width={25}
                height={25}
                alt=""
                className="object-cover"
              />
              <p className="hover:underline">Joaquín Vilchez</p>
            </Link>
          </div>
        </div>
        <hr />
      </div>
      <p className="text-gray-700 text-sm px-10 my-5">
        Los trenes de alta velocidad están revolucionando el transporte moderno,
        ofreciendo una alternativa rápida, eficiente y sostenible para los
        viajeros. Japón, líder en esta tecnología, ha presentado recientemente
        un nuevo modelo de tren que alcanza velocidades de hasta 400 km/h,
        reduciendo significativamente los tiempos de viaje entre las principales
        ciudades.
        <br />
        <br />
        Este avance no solo mejora la conectividad, sino que también promueve el
        uso de energías limpias y reduce la huella de carbono en comparación con
        otros medios de transporte como los aviones. Expertos aseguran que esta
        innovación marcará un antes y un después en la industria ferroviaria
        global.
        <br />
        <br />
        Además, el diseño de estos trenes incorpora tecnologías de última
        generación, como sistemas de suspensión magnética y materiales
        ultraligeros que optimizan el consumo energético. Las estaciones también
        están siendo adaptadas para facilitar el acceso y mejorar la experiencia
        del usuario, con sistemas de embarque más rápidos y eficientes.
        <br />
        <br />
        Este enfoque integral busca no solo mejorar la velocidad, sino también
        garantizar la comodidad y seguridad de los pasajeros. En Europa, países
        como Francia y Alemania están invirtiendo en la expansión de sus redes
        ferroviarias de alta velocidad, con el objetivo de conectar más ciudades
        y fomentar el turismo y el comercio.
        <br />
        <br />
        En América, proyectos similares están en marcha en Estados Unidos y
        Brasil, aunque enfrentan desafíos relacionados con la infraestructura y
        el financiamiento. Sin embargo, los expertos coinciden en que el futuro
        del transporte pasa por este tipo de soluciones sostenibles.
        <br />
        <br />
        Por otro lado, los críticos señalan que el costo inicial de estos
        proyectos puede ser elevado, y que es necesario garantizar que los
        beneficios económicos y ambientales compensen la inversión. A pesar de
        esto, los gobiernos y empresas privadas están apostando por esta
        tecnología como una forma de reducir la dependencia de los combustibles
        fósiles y combatir el cambio climático.
        <br />
        <br />
        En conclusión, los trenes de alta velocidad representan un paso
        significativo hacia un futuro más conectado y sostenible. Con avances
        continuos en tecnología e infraestructura, es probable que veamos un
        crecimiento exponencial en su adopción en las próximas décadas,
        transformando la manera en que las personas se desplazan y redefiniendo
        el concepto de transporte moderno.
      </p>
      <hr className="mb-5" />
    </>
  );
}
