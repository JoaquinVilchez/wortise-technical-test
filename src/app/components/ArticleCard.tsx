import Image from 'next/image';
import Link from 'next/link';

export default function ArticleCard() {
  return (
    <div className="flex flex-col p-4 mb-5 bg-gray-50 hover:bg-gray-100 rounded-lg shadow-md cursor-pointer hover:shadow-lg transform hover:scale-101 transition-transform duration-200 ease-in-out">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Image
            src="https://images.pexels.com/photos/29241269/pexels-photo-29241269/free-photo-of-shinkansen-moderno-en-una-estacion-de-tren-muy-concurrida.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="w-full object-cover rounded-lg h-30 md:h-70
          "
            width={1080}
            height={720}
            alt="Imagen de un tren"
          />
          <div className="md:pl-5 flex flex-col justify-between mt-3">
            <div>
              <p className="text-xl md:text-3xl font-bold mb-1">
                Avances en la Tecnología de Trenes de Alta Velocidad
              </p>
              <p className="text-gray-500 text-sm md:ml-1 mb-3">
                Los trenes de alta velocidad están revolucionando el transporte
                moderno, ofreciendo una alternativa rápida, eficiente y
                sostenible para los viajeros. Japón, líder en esta tecnología,
                ha presentado recientemente un nuevo modelo de tren que alcanza
                velocidades de hasta 400 km/h, reduciendo significativamente los
                tiempos de viaje entre las principales ciudades. Este avance no
                solo mejora la conectividad, sino que también promueve el uso de
                energías limpias y reduce la huella de carbono en comparación
                con otros medios de transporte como los aviones. Expertos
                aseguran que esta innovación marcará un antes y un después en la
                industria ferroviaria global.
              </p>
            </div>
            <Link href="/articles/1" className="md:mb-2 mr-4 cursor-pointer">
              <div className="flex items-center gap-2 mt-2 md:justify-end">
                <Image
                  src="/avatar.svg"
                  width={25}
                  height={25}
                  alt=""
                  className="object-cover"
                />
                <p className="text-xs w-10 leading-3 hover:underline">
                  Joaquín Vilchez
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
