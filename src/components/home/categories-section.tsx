"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Users, Star, Award, Video, Zap } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    id: 1,
    title: "밈",
    description: "최신 유행하는 밈과 짤방 모음",
    icon: <Sparkles className="h-6 w-6" />,
    color: "from-pink-500 to-rose-500",
    link: "/memes",
    count: "2.3K+",
  },
  {
    id: 2,
    title: "인플루언서",
    description: "인기 인플루언서의 최신 소식",
    icon: <Users className="h-6 w-6" />,
    color: "from-purple-500 to-indigo-500",
    link: "/influencers",
    count: "1.5K+",
  },
  {
    id: 3,
    title: "연예인",
    description: "K-POP, 드라마, 예능 스타 소식",
    icon: <Star className="h-6 w-6" />,
    color: "from-indigo-500 to-blue-500",
    link: "/celebrities",
    count: "3.7K+",
  },
  {
    id: 4,
    title: "챌린지",
    description: "참여하고 싶은 인기 챌린지",
    icon: <Award className="h-6 w-6" />,
    color: "from-amber-500 to-orange-500",
    link: "/challenges",
    count: "850+",
  },
  {
    id: 5,
    title: "라이브",
    description: "실시간 스트리밍 콘텐츠",
    icon: <Video className="h-6 w-6" />,
    color: "from-red-500 to-pink-500",
    link: "/live",
    count: "120+",
  },
  {
    id: 6,
    title: "트렌드",
    description: "지금 가장 핫한 트렌드",
    icon: <Zap className="h-6 w-6" />,
    color: "from-emerald-500 to-teal-500",
    link: "/trending",
    count: "5K+",
  },
]

export default function CategoriesSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">카테고리별 인싸 콘텐츠</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            관심 있는 카테고리를 선택하고 최신 트렌드를 확인하세요. 인싸이더는 다양한 카테고리의 콘텐츠를 제공합니다.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category) => (
            <motion.div key={category.id} variants={item}>
              <Link href={category.link} className="block h-full">
                <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 border-0 bg-white dark:bg-gray-800 hover:translate-y-[-5px]">
                  <CardContent className="p-6 h-full flex flex-col">
                    <div
                      className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r ${category.color} text-white`}
                    >
                      {category.icon}
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{category.title}</h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{category.description}</p>

                    <div className="flex justify-between items-center mt-auto">
                      <span className="text-sm font-medium text-purple-600 dark:text-purple-400">더보기</span>
                      <span className="text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-full">
                        {category.count} 콘텐츠
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
