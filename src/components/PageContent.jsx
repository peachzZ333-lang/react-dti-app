export default function PageContent({ title, subtitle }) {
  return (
    <>
      <h1 className="text-center font-bold text-4xl text-red-500 font-charm mb-2">{title}</h1>
      <h2 className="text-center font-bold text-3xl text-green-600 font-itim mb-4">{subtitle}</h2>
      <hr className="my-5 w-[80%] mx-auto" />
      <p className="text-center font-kanit font-bold text-xl leading-relaxed my-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores ea earum nesciunt, aut, nemo explicabo rem aliquam odit tempore quos cum quis ipsum voluptatibus suscipit saepe deserunt odio doloribus nostrum!
      </p>
      <h3 className="text-center font-kanit text-2xl my-5 font-bold text-orange-500">
        ยินดีตอนรับทุกท่าน Hey Hey Hey
      </h3>
      <hr className="my-5 w-[80%] mx-auto" />
    </>
  )
}
