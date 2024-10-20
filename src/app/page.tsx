import Image from "next/image";
import Link from "next/link";
import image from "../../public/MAIN.jpg"


export default function Home() {
  return (
    <div className="w-[100%] min-h-screen overflow-auto bg-[#0096c7] p-12">
      <div className="imageContainer mb-6">"
            <Image src='/MAIN.jpg' alt='MAIN' width={600} height={150} className="rounded-md w-full h-auto" layout="responsive"/>
          </div>
      <h1 className="text-center text-[5vw] font-bold font-serif text-[#ffe5d9]"></h1>
      <div className="parentDiv flex justify-center gap-5 items-center flex-wrap mt-8">
        <div className='blog_card transform hover:rotate-2 hover:scale-105  hover:shadow-2xl transition-transform duration-300 w-[330px] bg-[#ffea00] border-solid border-[#001233] border-[2px] rounded-xl p-4'>
          <div className="imageContainer mb-2 ">
            <Image src='/blog1main.jpg' alt='blog1main.jpg' width={600} height={600} className="rounded-md w-[100%] h-[200px]" />
          </div>
          <div className="title uppercase mb-2">
            <h1 className="text-xl font-bold text-[0d1b2a]">"The Importance of Positive Reinforcement in Parenting"</h1>
          </div>
          <div className="description mb-4">
            <p className="text-[#d84727] font-bold">Positive reinforcement is a powerful tool for shaping children's behavior. This blog post explores the benefits of positive reinforcement and provides examples of how parents can implement it in daily life.
            </p>
          </div>
          <div className="button">
            <button className="bg-[#023e7d] text-white hover:underline py-2 px-4 rounded-lg"><Link href='/blog_1'>Read More</Link></button>
          </div>
        </div>
        <div className='blog_card transform hover:rotate-2 hover:scale-105  hover:shadow-2xl transition-transform duration-300 w-[330px] bg-[#ffea00] border-solid border-[#001233] border-[2px] rounded-xl p-4'>
          <div className="imageContainer mb-2 ">
            <Image src='/blog2main.jpg' alt='blog2main.jpg' width={600} height={600} className="rounded-md w-[100%] h-[200px]" />
          </div>
          <div className="title uppercase mb-2">
            <h1 className="text-xl font-bold text-[0d1b2a]">"10 Effective Ways to Manage Your Child's Screen Time"
            </h1>
          </div>
          <div className="description mb-4">
            <p className="text-[#d84727] font-bold">In today's digital age, managing screen time is crucial for children's physical and mental well-being. This blog post provides practical tips for parents to limit screen time and promote healthy habits.

</p>
          </div>
          <div className="button">
            <button className="bg-[#023e7d] text-white hover:underline py-2 px-4 rounded-lg"><Link href='/blog_2'>Read More</Link></button>
          </div>
        </div>
        <div className='blog_card transform hover:rotate-2 hover:scale-105  hover:shadow-2xl transition-transform duration-300 w-[330px] bg-[#ffea00] border-solid border-[#001233] border-[2px] rounded-xl p-4'>
          <div className="imageContainer mb-4">
            <Image src='/blog3main.jpg' alt='blog3main.jpg' width={600} height={600} className="rounded-md w-[100%] h-[200px]" />
          </div>
          <div className="title uppercase mb-2">
            <h1 className="text-xl font-bold text-[0d1b2a] mb-4">"Navigating Tantrums: Strategies for Calm and Patient Parenting"</h1>
          </div>
          <div className="description mb-5">
            <p className="text-[#d84727] font-bold">Tantrums can be challenging for parents. This blog post offers expert advice on staying calm and patient during tantrums, and provides strategies for preventing them.
            </p>
          </div>
          <div className="button">
            <button className="bg-[#023e7d] text-white hover:underline py-2 px-4 rounded-lg"><Link href='/blog_3'>Read More</Link></button>
          </div>
        </div>
        <div className='blog_card transform hover:rotate-2 hover:scale-105  hover:shadow-2xl transition-transform duration-300 w-[330px] bg-[#ffea00] border-solid border-[#001233] border-[2px] rounded-xl p-4'>
          <div className="imageContainer mb-2">
            <Image src='/blog4main.webp' alt='blog4main.webp' width={600} height={600} className="rounded-md w-[100%] h-[200px]" />
          </div>
          <div className="title uppercase mb-2">
            <h1 className="text-xl font-bold text-[0d1b2a]">"Fostering Independence in Children: Encouraging Self-Reliance"
            </h1>
          </div>
          <div className="description mb-3">
            <p className="text-[#d84727] font-bold">Encouraging independence helps children develop self-reliance and confidence. This blog post explores ways parents can promote independence in daily tasks and activities.
            </p>
          </div>
          <div className="button">
            <button className="bg-[#023e7d] text-white hover:underline py-2 px-4 rounded-lg"><Link href='/blog_4'>Read More</Link></button>
          </div>
        </div>
        <div className='blog_card transform hover:rotate-2 hover:scale-105  hover:shadow-2xl transition-transform duration-300 w-[330px] bg-[#ffea00] border-solid border-[#001233] border-[2px] rounded-xl p-4'>
          <div className="imageContainer mb-4">
            <Image src='/blog555main.jpg' alt='blog555main.jpg' width={600} height={600} className="rounded-md w-[100%] h-[200px]" />
          </div>
          <div className="title uppercase mb-2">
            <h1 className="text-xl font-bold text-[0d1b2a]"> "Nutrition for Kids: Healthy Eating Habits for a Happy Child"

</h1>
          </div>
          <div className="description mb-4">
            <p className="text-[#d84727] font-bold">"Boost your child's health and happiness with expert nutrition tips. Learn how to create balanced meals, establish healthy eating habits, and nurture a lifelong love for nutritious food."


            </p>
          </div>
          <div className="button">
            <button className="bg-[#023e7d] text-white hover:underline py-2 px-4 rounded-lg"><Link href='/blog_5'>Read More</Link></button>
          </div>
        </div>
        <div className='blog_card transform hover:rotate-2 hover:scale-105  hover:shadow-2xl transition-transform duration-300 w-[330px] bg-[#ffea00] border-solid border-[#001233] border-[2px] rounded-xl p-4'>
          <div className="imageContainer mb-4">
            <Image src='/blog6main.png' alt='blog6main.png' width={600} height={600} className="rounded-md w-[100%] h-[200px]" />
          </div>
          <div className="title uppercase mb-2">
            <h1 className="text-xl font-bold text-[0d1b2a]">"Self-Care for Parents: Prioritizing Mental Health and Wellbeing"
            </h1>
          </div>
          <div className="description mb-4">
            <p className="text-[#d84727] font-bold">"Recharge and refocus with practical self-care strategies for busy parents. Learn how to prioritize mental health, manage stress, and cultivate a sense of calm amidst chaos. Discover a happier, healthier you."

</p>
          </div>
          <div className="button">
            <button className="bg-[#023e7d] text-white hover:underline py-2 px-4 rounded-lg"><Link href='/blog_6'>Read More</Link></button>
          </div>
        </div>

      </div>
    </div>
  );
}