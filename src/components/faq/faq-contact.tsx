"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, Phone } from "lucide-react"
import Link from "next/link"

export default function FaqContact() {
  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">아직 궁금한 점이 있으신가요?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            원하는 답변을 찾지 못하셨다면 아래 양식을 통해 문의해주세요. 최대한 빠르게 답변 드리겠습니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card className="border-0 bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        이름
                      </label>
                      <Input
                        id="name"
                        placeholder="이름을 입력하세요"
                        className="bg-gray-50 border-gray-200 dark:bg-gray-900 dark:border-gray-700"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        이메일
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="이메일을 입력하세요"
                        className="bg-gray-50 border-gray-200 dark:bg-gray-900 dark:border-gray-700"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      제목
                    </label>
                    <Input
                      id="subject"
                      placeholder="문의 제목을 입력하세요"
                      className="bg-gray-50 border-gray-200 dark:bg-gray-900 dark:border-gray-700"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      메시지
                    </label>
                    <Textarea
                      id="message"
                      placeholder="문의 내용을 입력하세요"
                      rows={6}
                      className="bg-gray-50 border-gray-200 dark:bg-gray-900 dark:border-gray-700"
                    />
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700">문의하기</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-0 bg-white dark:bg-gray-800 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">연락처 정보</h3>

                <div className="space-y-6 flex-grow">
                  <div className="flex items-start">
                    <div className="mr-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                      <Mail className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">이메일</h4>
                      <p className="text-gray-600 dark:text-gray-400">support@inssider.co.kr</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                      <Phone className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">전화</h4>
                      <p className="text-gray-600 dark:text-gray-400">02-123-4567</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">평일 10:00 - 18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                      <MessageSquare className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">라이브 채팅</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        웹사이트 우측 하단의 채팅 아이콘을 클릭하여 실시간 상담을 이용하세요.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <Link href="/contact">
                    <Button variant="outline" className="w-full">
                      자세한 연락처 정보
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
