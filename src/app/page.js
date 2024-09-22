
export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-5 mb-5 mt-5">
        <h1 className='text-4xl text-center font-semibold'>Discover the Power of Node.js 🚀</h1>
        <p className="text-ms text-[#CECECE] text-center">Explore the key concepts of Node.js through our research platform</p>
      </div>
      <article className='bg-[#17191eCC] rounded-[2px] p-[20px] border border-[#3E3E3E] relative flex flex-col gap-2 -z-10'>
        <div className="absolute top-5 right-8 h-[60px] w-[45px] rounded-full blur-[70px] bg-blue-500"></div>
        <div className='flex gap-3'>
          <div>
            <h1 className='z-10 text-sm font-bold'>Centralized Documentation 📚</h1>
          </div>
        </div>
        <p className='z-10 text-xs'> Access detailed and well-organized information about Node.js, all in one place—perfect for students and developers alike.</p>
      </article>
      <div className="grid grid-cols-2 grid-rows-2 gap-[10px]">
        <article className='bg-[#17191eCC] rounded-[2px] p-[20px] border border-[#3E3E3E] relative flex flex-col gap-2 -z-10'>
          <div className="absolute top-5 right-8 h-[60px] w-[45px] rounded-full blur-[70px] bg-[orange]"></div>
          <div className='flex gap-3'>
            <div>
              <h1 className='z-10 text-sm font-bold'>Real-Time Updates 🔄</h1>
            </div>
          </div>
          <p className='z-10 text-xs'>Stay up to date with the latest advancements and updates in the Node.js ecosystem, powered by the reactive architecture of Next.js.</p>
        </article>
        <article className='bg-[#17191eCC] rounded-[2px] p-[20px] border border-[#3E3E3E] relative flex flex-col gap-2 -z-10'>
          <div className="absolute top-5 right-8 h-[60px] w-[45px] rounded-full blur-[70px] bg-[#0CDFAA]"></div>
          <div className='flex gap-3'>
            <div>
              <h1 className='z-10 text-sm font-bold'>Performance Optimized ⚡</h1>
            </div>
          </div>
          <p className='z-10 text-xs'>Built with Next.js, our platform ensures a smooth, fast, and accessible experience on any device.</p>
        </article>
        <article className='bg-[#17191eCC] rounded-[2px] p-[20px] border border-[#3E3E3E] relative flex flex-col gap-2 -z-10'>
          <div className="absolute top-5 right-8 h-[60px] w-[45px] rounded-full blur-[70px] bg-[#EE5389]"></div>
          <div className='flex gap-3'>
            <div>
              <h1 className='z-10 text-sm font-bold'>Scalable and Flexible 🌐</h1>
            </div>
          </div>
          <p className='z-10 text-xs'>Designed to grow with your content. Whether you re a beginner or an expert, our wiki adapts to your research needs.</p>
        </article>
        <article className='bg-[#17191eCC] rounded-[2px] p-[20px] border border-[#3E3E3E] relative flex flex-col gap-2 -z-10'>
          <div className="absolute top-5 right-8 h-[60px] w-[45px] rounded-full blur-[70px] bg-purple-400"></div>
          <div className='flex gap-3'>
            <div>
              <h1 className='z-10 text-sm font-bold'>Collaborative and Extensible 🤝</h1>
            </div>
          </div>
          <p className='z-10 text-xs'> Contribute and collaborate to expand knowledge about Node.js, with the ability to add new sections or tools.</p>
        </article>
      </div>
    </>
  );
}
