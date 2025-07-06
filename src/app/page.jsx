import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  return (
    <>
      <div className="flex items-center flex-col justify-center h-screen">
        <h1 className="text-3xl font-bold" >Bem-Vindo!</h1>
        <h1 className="text-2xl mb-14 mt-10 font-bold">Navegue entre as páginas</h1>
        <Carousel className="w-[400px] text-center">
          <CarouselContent>
            <CarouselItem><a href="/contato"> <img className="w-96 h-72 object-cover rounded-lg mx-auto" src="https://t4.ftcdn.net/jpg/04/03/23/45/360_F_403234519_pnvAvuAdxGwRppiYULdi2O12ZKCVxckc.jpg" alt="" /> Contato</a></CarouselItem>
            <CarouselItem><a href="/produtos"><img className="w-96 h-72 object-cover rounded-lg mx-auto" src="https://media.istockphoto.com/id/1401460590/pt/foto/businessman-working-on-laptop-with-document-management-icon.jpg?s=612x612&w=0&k=20&c=7OKaR5g5KW9127RyWEDffM6Y8ZWA1Q4d-BtdygiZlks=" alt="" />Produtos</a></CarouselItem>
            <CarouselItem><a href="/eventos"> <img className="w-96 h-72 object-cover rounded-lg mx-auto" src="https://media.istockphoto.com/id/668221242/pt/foto/party-people-communication-talking-happiness-concept.jpg?s=612x612&w=0&k=20&c=0TnaaskcAi2NKbR4njnlCeDyxEUZDUOMK_Y9C9va9mI=" alt="" /> Eventos</a></CarouselItem>
            <CarouselItem><a href="/clientes"><img className="w-96 h-72 object-cover rounded-lg mx-auto" src="https://media.istockphoto.com/id/1405156781/pt/foto/businessman-and-woman-shake-hands-like-hello-in-office-closeup.jpg?s=612x612&w=0&k=20&c=zbh2hRcSvGHLPSOEDKeFkjOWgvWwGh50Rn-4e9EUd1c=" alt="" />Clientes</a></CarouselItem>
            <CarouselItem><a href="/sobre-nos"><img className="w-96 h-72 object-cover rounded-lg mx-auto" src="https://t3.ftcdn.net/jpg/05/39/65/40/360_F_539654005_M7XZRGAG3TAarymgapSSgSUdgkNKQL2G.jpg" alt="" />Sobre Nós</a></CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}