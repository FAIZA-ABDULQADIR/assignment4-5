import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-auto bg-[#0096c7] p-12">
      <div className="imageContainer mb-6">
        <Image src="/MAIN.jpg" alt="MAIN" width={600} height={150} className="rounded-md w-full h-auto" />
      </div>
      <h1 className="text-center text-[5vw] font-bold font-serif text-[#ffe5d9]">Parenting Blog</h1>

      <div className="parentDiv flex justify-center gap-5 items-center flex-wrap mt-8">
        {/* Blog Post 1 */}
        <div className="blog_card transform hover:rotate-2 hover:scale-105 hover:shadow-2xl transition-transform duration-300 w-[330px] bg-[#ffea00] border-[#001233] border-2 rounded-xl p-4">
          <div className="imageContainer mb-2">
            <Image src="/blog1main.jpg" alt="Blog 1" width={600} height={200} className="rounded-md w-full h-[200px]" />
          </div>
          <h1 className="text-xl font-bold text-[#0d1b2a] uppercase mb-2">
            The Importance of Positive Reinforcement in Parenting
          </h1>
          <p className="text-[#d84727] font-bold">
            Positive reinforcement is a powerful tool for shaping children&apos;s behavior. This blog post explores its
            benefits and provides examples of how parents can implement it in daily life.
          </p>
          <button className="bg-[#023e7d] text-white hover:underline py-2 px-4 rounded-lg mt-4">
            <Link href="/blog_1">Read More</Link>
          </button>
        </div>

        {/* Blog Post 2 */}
        <div className="blog_card transform hover:rotate-2 hover:scale-105 hover:shadow-2xl transition-transform duration-300 w-[330px] bg-[#ffea00] border-[#001233] border-2 rounded-xl p-4">
          <div className="imageContainer mb-2">
            <Image src="/blog2main.jpg" alt="Blog 2" width={600} height={200} className="rounded-md w-full h-[200px]" />
          </div>
          <h1 className="text-xl font-bold text-[#0d1b2a] uppercase mb-2">
            10 Effective Ways to Manage Your Child&apos;s Screen Time
          </h1>
          <p className="text-[#d84727] font-bold">
            Managing screen time is crucial for children&apos;s well-being. This blog provides practical tips for parents to
            limit screen time and promote healthy habits.
          </p>
          <button className="bg-[#023e7d] text-white hover:underline py-2 px-4 rounded-lg mt-4">
            <Link href="/blog_2">Read More</Link>
          </button>
        </div>

        {/* Blog Post 3 */}
        <div className="blog_card transform hover:rotate-2 hover:scale-105 hover:shadow-2xl transition-transform duration-300 w-[330px] bg-[#ffea00] border-[#001233] border-2 rounded-xl p-4">
          <div className="imageContainer mb-2">
            <Image src="/blog3main.jpg" alt="Blog 3" width={600} height={200} className="rounded-md w-full h-[200px]" />
          </div>
          <h1 className="text-xl font-bold text-[#0d1b2a] uppercase mb-2">
            Navigating Tantrums: Strategies for Calm and Patient Parenting
          </h1>
          <p className="text-[#d84727] font-bold">
            Tantrums can be challenging. This blog offers expert advice on staying calm and patient and provides strategies for preventing them.
          </p>
          <button className="bg-[#023e7d] text-white hover:underline py-2 px-4 rounded-lg mt-4">
            <Link href="/blog_3">Read More</Link>
          </button>
        </div>

        {/* Blog Post 4 */}
        <div className="blog_card transform hover:rotate-2 hover:scale-105 hover:shadow-2xl transition-transform duration-300 w-[330px] bg-[#ffea00] border-[#001233] border-2 rounded-xl p-4">
          <div className="imageContainer mb-2">
            <Image src="/blog4main.webp" alt="Blog 4" width={600} height={200} className="rounded-md w-full h-[200px]" />
          </div>
          <h1 className="text-xl font-bold text-[#0d1b2a] uppercase mb-2">
            Fostering Independence in Children: Encouraging Self-Reliance
          </h1>
          <p className="text-[#d84727] font-bold">
            Encouraging independence helps children develop confidence. Learn how to promote independence in daily tasks and activities.
          </p>
          <button className="bg-[#023e7d] text-white hover:underline py-2 px-4 rounded-lg mt-4">
            <Link href="/blog_4">Read More</Link>
          </button>
        </div>

        {/* Blog Post 5 */}
        <div className="blog_card transform hover:rotate-2 hover:scale-105 hover:shadow-2xl transition-transform duration-300 w-[330px] bg-[#ffea00] border-[#001233] border-2 rounded-xl p-4">
          <div className="imageContainer mb-2">
            <Image src="/blog555main.jpg" alt="Blog 5" width={600} height={200} className="rounded-md w-full h-[200px]" />
          </div>
          <h1 className="text-xl font-bold text-[#0d1b2a] uppercase mb-2">Nutrition for Kids: Healthy Eating Habits</h1>
          <p className="text-[#d84727] font-bold">
            Boost your child&apos;s health with expert nutrition tips. Learn how to create balanced meals and establish healthy eating habits.
          </p>
          <button className="bg-[#023e7d] text-white hover:underline py-2 px-4 rounded-lg mt-4">
            <Link href="/blog_5">Read More</Link>
          </button>
        </div>

        {/* Blog Post 6 */}
        <div className="blog_card transform hover:rotate-2 hover:scale-105 hover:shadow-2xl transition-transform duration-300 w-[330px] bg-[#ffea00] border-[#001233] border-2 rounded-xl p-4">
          <div className="imageContainer mb-2">
            <Image src="/blog6main.png" alt="Blog 6" width={600} height={200} className="rounded-md w-full h-[200px]" />
          </div>
          <h1 className="text-xl font-bold text-[#0d1b2a] uppercase mb-2">
            Self-Care for Parents: Prioritizing Mental Health
          </h1>
          <p className="text-[#d84727] font-bold">
            Recharge with practical self-care strategies. Learn how to prioritize mental health, manage stress, and cultivate a sense of calm.
          </p>
          <button className="bg-[#023e7d] text-white hover:underline py-2 px-4 rounded-lg mt-4">
            <Link href="/blog_6">Read More</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
