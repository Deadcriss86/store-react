import { Navlink } from "../../Components/Navbar_";
import { Footer } from "../../Components/footer";
import imgfondo from "../../Assets/img_fondo.png";
//import { HiChevronDoubleRight } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoArrowForwardCircle } from "react-icons/io5";
import { SlBadge } from "react-icons/sl";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import { Card } from "@material-tailwind/react";

function Home() {
  return (
    <>
      <div>
        <div className="">
          <Navlink />
        </div>
        <div className="w-screen h-screen relative">
          <img
            className="w-full h-full object-cover opacity-99"
            alt="Imagen de fondo"
            src={imgfondo}
          />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-end pr-10 pb-10 flex-col text-center text-white">
            <h1 className="text-5xl font-bold mb-4 pb-8">
              Venta de accesorios para tu motocicleta
            </h1>
            <div className="text-lg flex justify-between">
              Conoce nuestros productos
              <IoArrowForwardCircle size="2rem" className="text-[#0eff06]" />
            </div>{" "}
            <div className="flex justify-start items-start">
              <div className="flex justify-center text-lg pt-10">
                <IoLogoWhatsapp
                  href="#"
                  size="2rem"
                  className="text-[#0eff06] hover:text-[#0eff06]"
                />
                Contactanos para pedidos personalizados
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-3/4 h-full flex justify-center items-end m-b-4 pb-9">
            <p className="text-4xl font-bold mb-4 text-[#0eff06] border-r-1 border-[#0eff06] border-t-2 p-2">
              Quienes somos
            </p>
            <p className="text-white text-justify border-b-2 border-[#0eff06] p-2 flex ítem-center">
              Somos una empresa dedicada a la fabricación de accesorios y
              defensas para cualquier tipo de motocicleta. Nuestro principal
              objetivo es que nuestros clientes se sientan satisfechos con la
              estética personalizada de su moto.
              <br />
              <SlBadge
                size="4rem"
                className="text-[#0eff06] text-lg flex ítem-center"
              />
            </p>
          </div>
        </div>
        <div className="flex justify-center text-xl text-white w-full font-bold py-2 bg-[#000000]">
          Lo mas nuevo
        </div>
        <div className="bg-black rounded-lg shadow-sm carousel w-full flex justify-center py-6">
          <a
            href="#slide4"
            className="btn btn-circle bg-[#0eff06] hover:text-[#0eff06] "
          >
            ❮
          </a>
          <card
            itemID={1}
            className="w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-md bg-white"
          >
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
              className="object-cover w-full h-64"
              alt="First slide"
            />
            <div className="p-4">
              <h5 className="text-xl text-center font-semibold mb-2" href="#">
                Porta equipaje lateral
              </h5>
            </div>
          </card>
          <card
            itemID={2}
            className="w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-md bg-white"
          >
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
              className="object-cover w-full h-64"
              alt="Second slide"
            />
            <div className="p-4">
              <h5 className="text-xl text-center font-semibold mb-2">
                Parrilla con respaldo
              </h5>
            </div>
          </card>
          <card
            itemID={3}
            className="w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-md bg-white"
          >
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
              className="object-cover w-full h-64"
              alt="Product3"
            />
            <div className="p-4">
              <h5 href="#" className="text-xl text-center font-semibold mb-2">
                Slider tipo jaula
              </h5>
            </div>
          </card>
          <a
            href="#slide2"
            className="btn btn-circle bg-[#0eff06] hover:text-[#0eff06]"
          >
            ❯
          </a>{" "}
        </div>
        <div className="bg-black w-full text-xl text-wrap flex justify-center font-bold text-[#0eff06] py-4">
          Comentarios de nuestros clientes
        </div>
        <div className="bg-black w-full carousel-center py-6 flex justify-center items-center">
          <div className="card card-side bg-base-100 shadow-xl w-1/3">
            <card className="bg-white flex justify-center items-center px-3 rounded-lg">
              <img
                className=" rounded-lg"
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                alt="imgprod"
              />
              <div className="card-body">
                <div className="border-b-2 border-[#0eff06] text-center py-2">
                  <h2 itemID="name-customer">ALEJANDRO ROMERO</h2>
                </div>
                <p className="coment py-4">
                  La reja me pareció muy bonita. Le da ese aspecto rudo y le da
                  un gran realce. El portacelular no lo pude poner porque los
                  tornillos que trae de origen no son lo suficientemente largos
                  para agarrar las tres piezas: portacelular, reja y plásticos.
                </p>
                <div className="rating flex justify-center">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#0eff06]"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#0eff06]"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#0eff06]"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#0eff06]"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-[#0eff06]"
                  />
                </div>
                <div className="card-actions justify-center py-4">
                  <button
                    type="button"
                    className="text-gray-900 bg-[#0eff06] hover:bg-[#0eff06b4] focus:ring-1 focus:outline-none focus:[#0eff06] font-medium rounded-lg text-sm px-4 py-2 text-center dark:[#0eff06] dark:hover:bg-[#0eff069d] dark:focus:ring-[#0eff06]"
                  >
                    Ver producto
                  </button>
                </div>
              </div>
            </card>
          </div>
        </div>
        <div className="bg-black flex justify-center w-full py-6 gap-2 text-[#0eff06]">
          <a href="#item1" className="btn btn-xs hover:bg-white">
            1
          </a>
          <a href="#item2" className="btn btn-xs hover:bg-white">
            2
          </a>
          <a href="#item3" className="btn btn-xs hover:bg-white">
            3
          </a>
          <a href="#item4" className="btn btn-xs hover:bg-white">
            4
          </a>
        </div>
        <div>
          <div className="border-r-2 bg-[#0eff06">
            <h2 className="text-[#0eff06] text-4xl font-bold mb-4 pb-8 bg-black flex justify-center py-4 border-[#0eff06] border-t-2 p-2">
              Productos
            </h2>
          </div>
        </div>
        <div>
          {/*sliderbar*/}{" "}
          <div className="pl-4 py-2">
            <div className="bg-black text-white rounded-lg p-4 w-64 border-2 border-green-500">
              <div className="text-center text-lg font-bold mb-4">
                Categorias
              </div>
              <div className="border-b border-green-500">
                <ul className="menu bg-base-200 w-56 rounded-box">
                  <li>
                    <details open>
                      <summary>Slider superior</summary>
                      <ul>
                        <li className="text-green-500">
                          <a>Vento</a>
                        </li>
                        <li className="text-green-500">
                          <a>150CV</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>
              <div className="border-b border-green-500">
                <ul className="menu bg-base-200 w-56 rounded-box">
                  <li>
                    <details open>
                      <summary>Slider inferior</summary>
                      <ul>
                        <li className="text-green-500">
                          <a>Vento</a>
                        </li>
                        <li className="text-green-500">
                          <a>150CV</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>
              <div className="border-b border-green-500">
                <ul className="menu bg-base-200 w-56 rounded-box">
                  <li>
                    <details open>
                      <summary>Slider trasero</summary>
                      <ul>
                        <li className="text-green-500">
                          <a>Vento</a>
                        </li>
                        <li className="text-green-500">
                          <a>150CV</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>
              <div className="border-b border-green-500">
                <ul className="menu bg-base-200 w-56 rounded-box">
                  <li>
                    <details open>
                      <summary>Parrilla deportiva</summary>
                      <ul>
                        <li className="text-green-500">
                          <a>Vento</a>
                        </li>
                        <li className="text-green-500">
                          <a>150CV</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>
              <div className="border-b border-green-500">
                <ul className="menu bg-base-200 w-56 rounded-box">
                  <li>
                    <details open>
                      <summary>Parrilla de carga</summary>
                      <ul>
                        <li className="text-green-500">
                          <a>Vento</a>
                        </li>
                        <li className="text-green-500">
                          <a>150CV</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>
              <div className="border-b border-green-500">
                <ul className="menu bg-base-200 w-56 rounded-box">
                  <li>
                    <details open>
                      <summary>Parrilla con respaldo</summary>
                      <ul>
                        <li className="text-green-500">
                          <a>Vento</a>
                        </li>
                        <li className="text-green-500">
                          <a>150CV</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>
              <div className="border-b border-green-500">
                <ul className="menu bg-base-200 w-56 rounded-box">
                  <li>
                    <details open>
                      <summary>Porta alforjas</summary>
                      <ul>
                        <li className="text-green-500">
                          <a>Vento</a>
                        </li>
                        <li className="text-green-500">
                          <a>150CV</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>
              <div className="border-b border-green-500">
                <ul className="menu bg-base-200 w-56 rounded-box">
                  <li>
                    <details open>
                      <summary>Protector de faro</summary>
                      <ul>
                        <li className="text-green-500">
                          <a>Vento</a>
                        </li>
                        <li className="text-green-500">
                          <a>150CV</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>
            </div>
          </div>{" "}
          <div className="bg-white rounded-lg border border-green-500 shadow-md p-4 max-w-sm mx-auto">
            <div className="relative">
              <img
                src="https://via.placeholder.com/150" // Replace with your image source
                alt="Product"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </button>
            </div>

            <div className="p-4">
              <h2 className="text-lg font-bold">Precio: $1,200.00 MXN</h2>
              <p className="text-gray-600">
                Slider reforzado para moto scorpion dinamo 200, 250
              </p>
              <p className="text-red-500">(3 Disponibles)</p>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700">
                Ver mas
              </button>
            </div>
          </div>
          <div className="flex justify-center py-4">
            {" "}
            <div className="bg-black flex justify-center w-full py-6 gap-2 text-[#0eff06]">
              <a href="#item1" className="btn btn-xs hover:bg-white">
                1
              </a>
              <a href="#item2" className="btn btn-xs hover:bg-white">
                2
              </a>
              <a href="#item3" className="btn btn-xs hover:bg-white">
                3
              </a>
              <a href="#item4" className="btn btn-xs hover:bg-white">
                4
              </a>
            </div>
          </div>{" "}
          <div className="  flex justify-center py-4">
            <div className="flex justify-between text-lg pt-10">
              <IoLogoWhatsapp
                href="#"
                size="2rem"
                className="text-[#0eff06] hover:text-[#0eff06]"
              />
              Contactanos para pedidos personalizados
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
