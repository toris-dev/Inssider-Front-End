"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

export default function TermsContent() {
  return (
    <div className="py-12 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="terms" className="w-full max-w-4xl mx-auto">
          <TabsList className="w-full mb-8">
            <TabsTrigger value="terms" className="flex-1">
              이용약관
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex-1">
              개인정보처리방침
            </TabsTrigger>
            <TabsTrigger value="copyright" className="flex-1">
              저작권 정책
            </TabsTrigger>
          </TabsList>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6 md:p-8">
                <TabsContent value="terms" className="mt-0">
                  <div className="prose prose-purple dark:prose-invert max-w-none">
                    <h2>1. 서비스 이용약관</h2>
                    <p>
                      본 약관은 인싸이더(이하 "회사")가 제공하는 서비스의 이용과
                      관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타
                      필요한 사항을 규정함을 목적으로 합니다.
                    </p>

                    <h3>1.1 정의</h3>
                    <p>본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
                    <ul>
                      <li>
                        "서비스"란 회사가 제공하는 인싸이더 웹사이트 및 모바일
                        애플리케이션을 통해 이용할 수 있는 모든 서비스를
                        의미합니다.
                      </li>
                      <li>
                        "이용자"란 본 약관에 따라 회사가 제공하는 서비스를
                        이용하는 회원 및 비회원을 말합니다.
                      </li>
                      <li>
                        "회원"이란 회사에 개인정보를 제공하여 회원등록을 한
                        자로서, 회사의 정보를 지속적으로 제공받으며 회사가
                        제공하는 서비스를 계속적으로 이용할 수 있는 자를
                        말합니다.
                      </li>
                      <li>
                        "비회원"이란 회원에 가입하지 않고 회사가 제공하는
                        서비스를 이용하는 자를 말합니다.
                      </li>
                    </ul>

                    <h3>1.2 약관의 효력 및 변경</h3>
                    <p>
                      본 약관은 서비스를 이용하고자 하는 모든 이용자에게
                      적용됩니다. 회사는 필요한 경우 관련법령을 위배하지 않는
                      범위에서 본 약관을 변경할 수 있습니다. 회사가 약관을
                      변경할 경우에는 적용일자 및 변경사유를 명시하여 현행
                      약관과 함께 서비스 내에 그 적용일자 7일 전부터 적용일자
                      전일까지 공지합니다.
                    </p>

                    <h2>2. 서비스 이용</h2>
                    <h3>2.1 서비스 제공</h3>
                    <p>회사는 다음과 같은 서비스를 제공합니다.</p>
                    <ul>
                      <li>
                        밈, 인플루언서, 연예인, 챌린지 등 다양한 콘텐츠 제공
                      </li>
                      <li>사용자 간 소통 및 콘텐츠 공유 기능</li>
                      <li>콘텐츠 제작 및 업로드 기능</li>
                      <li>
                        기타 회사가 추가 개발하거나 다른 회사와의 제휴계약 등을
                        통해 이용자에게 제공하는 일체의 서비스
                      </li>
                    </ul>

                    <h3>2.2 서비스 이용시간</h3>
                    <p>
                      서비스는 연중무휴, 1일 24시간 제공을 원칙으로 합니다.
                      다만, 회사는 서비스의 운영 및 유지보수 등을 위해
                      일시적으로 서비스를 중단할 수 있으며, 이 경우 사전에
                      공지합니다. 단, 불가항력적인 사유로 인한 서비스 중단의
                      경우에는 사후에 공지할 수 있습니다.
                    </p>

                    <h2>3. 이용자의 의무</h2>
                    <p>이용자는 다음 행위를 하여서는 안 됩니다.</p>
                    <ul>
                      <li>타인의 정보 도용</li>
                      <li>회사가 게시한 정보의 변경</li>
                      <li>
                        회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의
                        송신 또는 게시
                      </li>
                      <li>
                        회사와 기타 제3자의 저작권 등 지적재산권에 대한 침해
                      </li>
                      <li>
                        회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는
                        행위
                      </li>
                      <li>
                        외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에
                        반하는 정보를 서비스에 공개 또는 게시하는 행위
                      </li>
                      <li>기타 불법적이거나 부당한 행위</li>
                    </ul>

                    <h2>4. 책임제한</h2>
                    <p>
                      회사는 천재지변 또는 이에 준하는 불가항력으로 인하여
                      서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이
                      면제됩니다. 회사는 이용자의 귀책사유로 인한 서비스 이용의
                      장애에 대하여 책임을 지지 않습니다. 회사는 이용자가
                      서비스를 이용하여 기대하는 수익을 상실한 것에 대하여
                      책임을 지지 않으며, 그 밖의 서비스를 통하여 얻은 자료로
                      인한 손해에 관하여 책임을 지지 않습니다.
                    </p>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
                      최종 업데이트: 2023년 12월 1일
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="privacy" className="mt-0">
                  <div className="prose prose-purple dark:prose-invert max-w-none">
                    <h2>1. 개인정보처리방침</h2>
                    <p>
                      인싸이더(이하 "회사")는 이용자의 개인정보를 중요시하며,
                      「개인정보 보호법」 등 관련 법령을 준수하기 위하여
                      노력하고 있습니다. 회사는 개인정보처리방침을 통하여 회사가
                      이용자로부터 수집하는 개인정보의 항목, 개인정보의 수집 및
                      이용목적, 개인정보의 보유 및 이용기간, 개인정보의 제3자
                      제공에 관한 사항을 이용자에게 알려드립니다.
                    </p>

                    <h3>1.1 수집하는 개인정보 항목</h3>
                    <p>
                      회사는 회원가입, 상담, 서비스 신청 등을 위해 아래와 같은
                      개인정보를 수집하고 있습니다.
                    </p>
                    <ul>
                      <li>
                        수집항목: 이메일 주소, 비밀번호, 닉네임, 프로필 이미지,
                        서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보
                      </li>
                      <li>
                        개인정보 수집방법: 홈페이지 회원가입, 서비스 이용,
                        이벤트 응모, 생성정보 수집 툴을 통한 수집
                      </li>
                    </ul>

                    <h3>1.2 개인정보의 수집 및 이용목적</h3>
                    <p>
                      회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
                    </p>
                    <ul>
                      <li>
                        회원 관리: 회원제 서비스 이용에 따른 본인확인, 개인식별,
                        불량회원의 부정 이용 방지와 비인가 사용 방지, 가입 의사
                        확인, 연령확인, 불만처리 등 민원처리, 고지사항 전달
                      </li>
                      <li>
                        서비스 제공: 콘텐츠 제공, 특정 맞춤 서비스 제공, 기본
                        서비스 제공
                      </li>
                      <li>
                        마케팅 및 광고에의 활용: 신규 서비스(제품) 개발 및 특화,
                        이벤트 등 광고성 정보 전달, 인구통계학적 특성에 따른
                        서비스 제공 및 광고 게재, 접속 빈도 파악 또는 회원의
                        서비스 이용에 대한 통계
                      </li>
                    </ul>

                    <h3>1.3 개인정보의 보유 및 이용기간</h3>
                    <p>
                      회사는 개인정보 수집 및 이용목적이 달성된 후에는 예외 없이
                      해당 정보를 지체 없이 파기합니다. 단, 관계법령의 규정에
                      의하여 보존할 필요가 있는 경우 회사는 아래와 같이
                      관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
                    </p>
                    <ul>
                      <li>보존 항목: 로그인 기록</li>
                      <li>보존 근거: 통신비밀보호법</li>
                      <li>보존 기간: 3개월</li>
                    </ul>

                    <h2>2. 개인정보의 제3자 제공</h2>
                    <p>
                      회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지
                      않습니다. 다만, 아래의 경우에는 예외로 합니다.
                    </p>
                    <ul>
                      <li>이용자들이 사전에 동의한 경우</li>
                      <li>
                        법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진
                        절차와 방법에 따라 수사기관의 요구가 있는 경우
                      </li>
                    </ul>

                    <h2>3. 개인정보의 파기</h2>
                    <p>
                      회사는 원칙적으로 개인정보 처리목적이 달성된 경우에는
                      지체없이 해당 개인정보를 파기합니다. 파기의 절차, 기한 및
                      방법은 다음과 같습니다.
                    </p>
                    <ul>
                      <li>
                        파기절차: 이용자가 입력한 정보는 목적 달성 후 별도의
                        DB에 옮겨져 내부 방침 및 기타 관련 법령에 따라 일정기간
                        저장된 후 혹은 즉시 파기됩니다.
                      </li>
                      <li>
                        파기기한: 이용자의 개인정보는 개인정보의 보유기간이
                        경과된 경우에는 보유기간의 종료일로부터 5일 이내에,
                        개인정보의 처리 목적 달성, 해당 서비스의 폐지, 사업의
                        종료 등 그 개인정보가 불필요하게 되었을 때에는
                        개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5일
                        이내에 그 개인정보를 파기합니다.
                      </li>
                      <li>
                        파기방법: 전자적 파일 형태의 정보는 기록을 재생할 수
                        없는 기술적 방법을 사용합니다. 종이에 출력된 개인정보는
                        분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
                      </li>
                    </ul>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
                      최종 업데이트: 2023년 12월 1일
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="copyright" className="mt-0">
                  <div className="prose prose-purple dark:prose-invert max-w-none">
                    <h2>1. 저작권 정책</h2>
                    <p>
                      인싸이더(이하 "회사")는 저작권법을 준수하며, 회사가
                      제공하는 서비스를 통해 게시되는 모든 콘텐츠의 저작권
                      보호를 중요시합니다.
                    </p>

                    <h3>1.1 콘텐츠 저작권</h3>
                    <p>
                      회사가 제작한 콘텐츠에 대한 저작권 및 기타 지적재산권은
                      회사에 귀속됩니다. 이용자는 회사가 제공하는 서비스를
                      이용함으로써 얻은 정보를 회사의 사전 승낙 없이 복제, 송신,
                      출판, 배포, 방송 등 기타 방법에 의하여 영리목적으로
                      이용하거나 제3자에게 이용하게 하여서는 안 됩니다.
                    </p>

                    <h3>1.2 이용자 콘텐츠</h3>
                    <p>
                      이용자가 서비스 내에 게시한 게시물의 저작권은 해당
                      게시물의 저작자에게 귀속됩니다. 이용자가 서비스 내에
                      게시하는 게시물은 검색결과 내지 서비스 및 관련 프로모션
                      등에 노출될 수 있으며, 해당 노출을 위해 필요한 범위
                      내에서는 일부 수정, 복제, 편집되어 게시될 수 있습니다.
                    </p>

                    <h3>1.3 저작권 침해 신고</h3>
                    <p>
                      회사는 저작권법을 준수하고 이용자의 권리를 보호하기 위해
                      저작권 침해에 대한 신고를 접수하고 처리합니다. 저작권
                      침해를 발견한 경우, 다음 정보를 포함하여 회사에 신고해
                      주시기 바랍니다.
                    </p>
                    <ul>
                      <li>침해된 저작물의 설명 및 소유권 증명</li>
                      <li>침해 콘텐츠의 위치(URL)</li>
                      <li>연락처 정보(이메일, 전화번호)</li>
                      <li>침해 신고의 진실성에 대한 진술</li>
                    </ul>

                    <h2>2. 저작권 침해에 대한 조치</h2>
                    <p>
                      회사는 저작권 침해가 확인된 콘텐츠에 대해 다음과 같은
                      조치를 취할 수 있습니다.
                    </p>
                    <ul>
                      <li>해당 콘텐츠의 삭제 또는 접근 차단</li>
                      <li>반복적인 침해자에 대한 서비스 이용 제한</li>
                      <li>관련 법적 조치 시행</li>
                    </ul>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-8">
                      최종 업데이트: 2023년 12월 1일
                    </p>
                  </div>
                </TabsContent>
              </CardContent>
            </Card>
          </motion.div>
        </Tabs>
      </div>
    </div>
  );
}
