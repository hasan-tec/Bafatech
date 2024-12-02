import { SiteHeader } from "@/components/site-header"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"

const allPolicies = {
  privacyPolicy: {
    title: "Privacy Policy",
    lastUpdated: "2024",
    sections: [
      {
        id: "overview",
        title: "1. Overview",
        content: `BafaTech Consulting ("BafaTech," "we," "our," or "us") values and respects your privacy. This Privacy Policy outlines how we collect, use, and disclose personal information across our websites, products, and services ("Services"). Our practices comply with applicable privacy regulations. This Privacy Policy applies to personal information we collect directly, indirectly, or through third parties, including personal data processed when we act as a data processor on behalf of our clients. For such cases, our clients' privacy policies take precedence.`
      },
      {
        id: "collection",
        title: "2. Personal Information: Collection",
        content: `We collect and process personal information when you engage with our Services, including information provided directly by you or your organization, data generated during interactions, and information obtained from third-party sources.`
      },
      {
        id: "what-collected",
        title: "3. What Personal Information is Collected",
        subsections: [
          {
            title: "Direct Information",
            items: [
              "Client Details: Names, email addresses, phone numbers, and company information",
              "Content Uploads: Files and data uploaded through our Services",
              "Order Placement: Billing, shipping, and payment details"
            ]
          },
          {
            title: "Indirect Information",
            items: [
              "Cookies and Tracking: Data collected via browser cookies and tracking pixels",
              "Web Logs: IP addresses, browser types, and usage timestamps",
              "Interaction Analytics: Information on website interactions and clicks"
            ]
          },
          {
            title: "Sensitive Information",
            items: [
              "Financial Data: Credit/debit card details for transactions",
              "Geolocation: Precise location data for service delivery"
            ]
          }
        ]
      },
      {
        id: "how-used",
        title: "4. How Your Personal Information is Used",
        items: [
          "Deliver and manage Services, including customer support",
          "Enhance and develop our products",
          "Comply with legal and regulatory obligations",
          "Communicate updates, offers, and events",
          "Analyze usage patterns for marketing and product improvement"
        ]
      },
      {
        id: "disclosure",
        title: "5. How We Disclose Your Personal Information",
        subsections: [
          {
            title: "Business Operations",
            content: "We share personal information with:",
            items: [
              "Service Providers: Vendors assisting with operations (e.g., IT, payment processing)",
              "Affiliates: Related companies within our corporate group",
              "Legal Authorities: When required by law or to protect our rights"
            ]
          },
          {
            title: "Public Information",
            content: "Certain user interactions (e.g., forums) may make your profile or comments visible to others."
          }
        ]
      },
      {
        id: "your-choices",
        title: "6. Your Choices with Respect to Personal Information",
        subsections: [
          {
            title: "Access and Control",
            items: [
              "Access personal data we hold about you",
              "Request corrections or deletions where applicable",
              "Opt-out of marketing communications"
            ]
          },
          {
            title: "Submitting Requests",
            content: "To exercise your rights, email us at bafa@bafatechconsulting.com. Requests will be verified for security purposes."
          }
        ]
      },
      {
        id: "retention",
        title: "7. Retention of Your Personal Information",
        content: "We retain personal information as long as necessary for business operations or legal compliance. Retention periods vary by data type and regulatory requirements."
      },
      {
        id: "location",
        title: "8. Location of Your Personal Information",
        content: "Personal information is stored and processed in secure data centers. For cross-border data transfers, we adhere to legal frameworks like the EU Standard Contractual Clauses."
      },
      {
        id: "protection",
        title: "9. Protection of Your Personal Information",
        items: [
          "Data encryption during transmission",
          "Secure access controls and firewalls",
          "Regular audits and vulnerability assessments"
        ]
      },
      {
        id: "changes",
        title: "10. Changes in This Privacy Policy",
        content: "This Privacy Policy may be updated. Changes will be communicated through our website."
      },
      {
        id: "matters",
        title: "11. Privacy Matters",
        content: `For inquiries about this Privacy Policy or to address concerns, contact us:
        BafaTech Consulting Privacy Office
        Email: bafa@bafatechconsulting.com`
      },
      {
        id: "submitting-requests",
        title: "12. Submitting Requests",
        items: [
          "Designate authorized agents to act on your behalf",
          "Appeal decisions related to your privacy rights"
        ],
        content: "We require identity verification for processing such requests."
      },
      {
        id: "cookie-usage",
        title: "13. Cookie Usage",
        items: [
          "Optimize user experience",
          "Analyze traffic and performance",
          "Deliver personalized advertising"
        ],
        content: "For details, see our Cookie Policy section below."
      },
      {
        id: "compliance",
        title: "14. Compliance with Laws and Regulations",
        items: [
          "General Data Protection Regulation (GDPR)",
          "California Consumer Privacy Act (CCPA)",
          "Other local data protection laws"
        ]
      }
    ]
  },
  cookiePolicy: {
    title: "Cookie Policy",
    sections: [
      {
        id: "cookie-overview",
        title: "Cookie Policy Overview",
        content: `This Cookie Policy explains how BafaTech Consulting, its subsidiaries, and affiliates (collectively, "BafaTech") collect and process information about you or your device through cookies and similar technologies on BafaTech's websites and applications ("BafaTech Sites").`
      },
      {
        id: "what-are-cookies",
        title: "What Are Cookies and Similar Technologies?",
        subsections: [
          {
            title: "Cookies",
            content: "Cookies are small text files stored on your device by websites. Each cookie contains a unique identifier and may store information like your preferences, login status, or browsing activity. Cookies help websites recognize your browser when you revisit them."
          },
          {
            title: "Web Beacons",
            content: "Web beacons (also called single-pixel GIFs) are small electronic images embedded in websites or emails. They allow tracking of your activity, such as when an email is opened or a webpage is visited."
          },
          {
            title: "Mobile Analytics and Advertising IDs",
            content: "Mobile devices generate unique advertising IDs (e.g., iOS Identifier for Advertisers [IDFA] or Android Advertising ID). Apps and analytics tools can access these IDs to track app usage and deliver targeted advertising."
          }
        ]
      },
      {
        id: "cookie-usage",
        title: "How BafaTech Uses Cookies",
        items: [
          "Provide Services: Enable essential website functions, such as authentication",
          "Analyze Usage: Track how users interact with our sites and apps",
          "Enhance Experience: Remember preferences and optimize performance",
          "Deliver Advertising: Show relevant ads based on your activity",
          "Prevent Fraud: Detect and mitigate security risks"
        ]
      },
      {
        id: "cookie-types",
        title: "Types of Cookies We Use",
        subsections: [
          {
            title: "1. Strictly Necessary Cookies",
            content: "These cookies are essential for navigating our sites and accessing secure areas. They cannot be disabled."
          },
          {
            title: "2. Functionality Cookies",
            content: "Functionality cookies remember your preferences and enhance your user experience. These cookies are not used for advertising purposes."
          },
          {
            title: "3. Performance/Analytics Cookies",
            content: "These cookies collect data about site usage, such as pages visited and errors encountered. The information helps us improve functionality and user experience."
          },
          {
            title: "4. Advertising Cookies",
            content: "Advertising cookies track your browsing habits to display personalized ads. These may include data collected across multiple websites or devices."
          }
        ]
      },
      {
        id: "third-party-cookies",
        title: "Third-Party Cookie Partners",
        content: "We work with several third-party services for analytics and advertising:",
        partners: [
          {
            service: "Google Analytics",
            purpose: "Analytics",
            policy: "Google Privacy Policy"
          },
          {
            service: "Meta (Facebook)",
            purpose: "Advertising",
            policy: "Meta Privacy Policy"
          },
          {
            service: "LinkedIn",
            purpose: "Advertising/Analytics",
            policy: "LinkedIn Privacy Policy"
          }
        ]
      },
      {
        id: "cookie-controls",
        title: "Your Cookie Preferences and Controls",
        subsections: [
          {
            title: "Browser Controls",
            content: "Most browsers allow you to delete or block cookies. Refer to your browser's help section for instructions."
          },
          {
            title: "Mobile Device Settings",
            content: "Mobile devices offer options to limit ad tracking or reset advertising IDs through settings."
          },
          {
            title: "Global Privacy Control (GPC)",
            content: "Certain browsers and extensions support GPC signals to indicate your choice to opt out of specific data processing activities. BafaTech will honor valid GPC signals where required by law."
          }
        ]
      }
    ]
  },
  termsOfUse: {
    title: "Terms of Use",
    sections: [
      {
        id: "terms-overview",
        title: "Terms Overview",
        content: `THESE TERMS OF USE APPLY TO YOUR USE OF THIS BAFA TECH CONSULTING ("BAFA TECH") WEBSITE AND ANY OTHER WEBSITE PROPERTIES OWNED AND/OR OPERATED BY BAFA TECH CONSULTING OR ITS AFFILIATES ("BAFA TECH PROPERTIES"). BY ACCESSING AND/OR USING THIS WEBSITE OR ANY OTHER WEBSITE PROPERTY OWNED AND/OR OPERATED BY BAFA TECH CONSULTING, YOU AGREE TO THESE TERMS. IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST IMMEDIATELY CEASE USING THIS OR ANY OTHER BAFA TECH WEBSITE.`
      },
      {
        id: "definitions",
        title: "Definitions",
        items: [
          `"Content" refers to materials, information, text, graphics, images, and software available on the Website`,
          `"Privacy Policy" refers to BafaTech Consulting's current Privacy Policy`,
          `"Terms" means these Terms of Use, as updated`,
          `"Website" means this and other websites operated by BafaTech Consulting`
        ]
      },
      {
        id: "right-to-use",
        title: "Right to Use",
        content: `Subject to these Terms and BafaTech Consulting's Privacy Policy, we grant you the right to access and use Content on our Website. You agree not to modify, reproduce, distribute, or create derivative works of the Content without express written permission from BafaTech Consulting. Unauthorized use terminates this right immediately, and you must destroy all copies of Content in your possession.`
      },
      {
        id: "restrictions",
        title: "Restrictions",
        content: "You agree not to use the Website for unlawful or prohibited purposes, including but not limited to:",
        items: [
          "Harming, harassing, or infringing on the rights of others",
          "Posting abusive, obscene, fraudulent, or otherwise objectionable material",
          "Attempting unauthorized access to the Website, systems, or Content",
          "Introducing viruses, malware, or harmful code",
          "Overloading, disrupting, or damaging the Website's infrastructure",
          "Collecting user information without consent"
        ]
      },
      {
        id: "forums-submissions",
        title: "Discussion Forums and User Submissions",
        content: "BafaTech Consulting may provide forums or user groups for communication. While we may monitor these areas, we are not responsible for user-submitted content. Messages violating these Terms may be removed at our discretion.",
        additionalContent: "By submitting content, you grant BafaTech Consulting a non-exclusive, worldwide, royalty-free license to use, reproduce, or distribute the content for any purpose."
      },
      {
        id: "account-responsibility",
        title: "Account Responsibility",
        content: "If you create an account, you are responsible for maintaining its confidentiality. You agree not to share login credentials and accept liability for activities conducted under your account."
      },
      {
        id: "intellectual-property",
        title: "Intellectual Property",
        content: "All Content on this Website is owned or licensed by BafaTech Consulting and is protected by intellectual property laws. You are prohibited from using trademarks, logos, or other proprietary materials without prior written consent."
      },
      {
        id: "software-usage",
        title: "Downloading and Use of Software",
        content: `Software available on the Website is provided "as is," and its use is subject to additional terms outlined during download or subscription. BafaTech Consulting disclaims all warranties, including but not limited to, merchantability, fitness for a particular purpose, and non-infringement.`
      },
      {
        id: "third-party-content",
        title: "Third-Party Content",
        content: "Our Website may include links to third-party websites. These are provided for convenience and do not imply endorsement. BafaTech Consulting is not responsible for the content, policies, or practices of third-party sites."
      },
      {
        id: "liability-disclaimer",
        title: "Liability Disclaimer",
        content: `All Content and services are provided "as is" without warranties of any kind. BafaTech Consulting disclaims liability for inaccuracies, omissions, or interruptions on the Website.`,
        items: [
          "BafaTech Consulting is not liable for damages, including but not limited to lost profits, data, or goodwill",
          "Your sole remedy is to discontinue use of the Website"
        ]
      },
      {
        id: "export-rules",
        title: "Compliance with Export Rules",
        content: "By accessing Content, you agree to comply with applicable export control laws and regulations. You will not transfer Content to prohibited jurisdictions or individuals."
      },
      {
        id: "promotions",
        title: "Sweepstakes and Promotions",
        content: "Promotions available through the Website may have separate rules. By participating, you agree to abide by those rules in addition to these Terms."
      },
      {
        id: "governing-law",
        title: "Governing Law and Jurisdiction",
        content: "These Terms are governed by the laws of [Insert State/Country]. Disputes will be resolved exclusively in courts located in [Insert Jurisdiction]."
      },
      {
        id: "general-provisions",
        title: "General Provisions",
        content: "If any provision of these Terms is found invalid, it does not affect the enforceability of the remaining provisions. These Terms constitute the entire agreement between you and BafaTech Consulting concerning the use of the Website."
      }

      
    ]
  }
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[30vh] sm:h-[40vh] md:h-[50vh] flex items-center justify-start">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
              alt="Privacy & Legal Background"
              fill
              className="object-cover"
              priority
            />
            <div 
              className="absolute inset-0 bg-gradient-to-r from-[rgba(0,27,69,0.85)] to-[rgba(0,27,69,0.75)]"
              aria-hidden="true"
            />
          </div>

          <div className="container relative mx-auto px-4 lg:px-8">
            <nav className="flex items-center space-x-2 text-white/90 mb-2 sm:mb-4">
              <Link 
                href="/"
                className="font-nunito text-sm hover:text-white transition-colors"
              >
                Home
              </Link>
              <span className="text-white/60">/</span>
              <span className="font-nunito text-sm">Privacy & Legal</span>
            </nav>

            <h1 className="font-rajdhani text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold tracking-tight">
              Privacy & Legal
            </h1>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="bg-gray-50 border-b border-gray-200 ">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto">
              {["Privacy Policy", "Cookie Policy", "Terms of Use"].map((tab) => (
                <a
                  key={tab}
                  href={`#${tab.toLowerCase().replace(/\s+/g, '-')}`}
                  className="py-4 border-b-2 border-transparent hover:border-[#006CB0] text-gray-600 hover:text-[#006CB0] font-nunito whitespace-nowrap transition-colors"
                >
                  {tab}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Last Updated Section */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <p className="font-nunito text-gray-600">Last Updated: 2024</p>
          </div>
        </section>

        {/* Privacy Policy */}
        <div id="privacy-policy" className="border-t border-gray-200">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-rajdhani text-3xl sm:text-4xl font-bold text-[#041424] py-8">
              Privacy Policy
            </h2>
            {allPolicies.privacyPolicy.sections.map((section) => (
              <section 
                key={section.id}
                id={section.id}
                className="py-12 border-b border-gray-200 last:border-0"
              >
                <h3 className="font-rajdhani text-2xl font-bold text-[#041424] mb-6">
                  {section.title}
                </h3>
                
                {section.content && (
                  <p className="font-nunito text-[#686868] leading-relaxed mb-6">
                    {section.content}
                  </p>
                )}

                {section.items && (
                  <div className="space-y-3">
                    {section.items.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="text-[#006CB0] mt-[6px] flex-shrink-0">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="font-nunito text-[#686868] leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {section.subsections && (
                  <div className="space-y-8">
                    {section.subsections.map((subsection, index) => (
                      <div key={index} className="max-w-3xl">
                        <h4 className="font-rajdhani text-xl font-semibold text-[#041424] mb-4">
                          {subsection.title}
                        </h4>
                        {subsection.content && (
                          <p className="font-nunito text-[#686868] leading-relaxed mb-4">
                            {subsection.content}
                          </p>
                        )}
                        {subsection.items && (
                          <div className="space-y-3">
                            {subsection.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex items-start gap-3">
                                <div className="text-[#006CB0] mt-[6px] flex-shrink-0">
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </div>
                                <span className="font-nunito text-[#686868] leading-relaxed">{item}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>

        {/* Cookie Policy */}
        <div id="cookie-policy" className="border-t border-gray-200 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-rajdhani text-3xl sm:text-4xl font-bold text-[#041424] py-8">
              Cookie Policy
            </h2>
            {allPolicies.cookiePolicy.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="py-12 border-b border-gray-200 last:border-0"
              >
                <h3 className="font-rajdhani text-2xl font-bold text-[#041424] mb-6">
                  {section.title}
                </h3>

                {section.content && (
                  <p className="font-nunito text-[#686868] leading-relaxed mb-6">
                    {section.content}
                  </p>
                )}

                {section.items && (
                  <div className="space-y-3">
                    {section.items.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="text-[#006CB0] mt-[6px] flex-shrink-0">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="font-nunito text-[#686868] leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {section.subsections && (
                  <div className="space-y-8">
                    {section.subsections.map((subsection, index) => (
                      <div key={index} className="max-w-3xl">
                        <h4 className="font-rajdhani text-xl font-semibold text-[#041424] mb-4">
                          {subsection.title}
                        </h4>
                        <p className="font-nunito text-[#686868] leading-relaxed">
                          {subsection.content}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {section.partners && (
                  <div className="mt-6">
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white rounded-lg shadow">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="py-3 px-4 text-left font-rajdhani text-[#041424]">Service</th>
                            <th className="py-3 px-4 text-left font-rajdhani text-[#041424]">Purpose</th>
                            <th className="py-3 px-4 text-left font-rajdhani text-[#041424]">Privacy Policy</th>
                          </tr>
                        </thead>
                        <tbody>
                          {section.partners.map((partner, index) => (
                            <tr key={index} className="border-t border-gray-200">
                              <td className="py-3 px-4 font-nunito text-[#686868]">{partner.service}</td>
                              <td className="py-3 px-4 font-nunito text-[#686868]">{partner.purpose}</td>
                              <td className="py-3 px-4 font-nunito">
                                <a href="#" className="text-[#006CB0] hover:underline">{partner.policy}</a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>

        {/* Terms of Use */}
        <div id="terms-of-use" className="border-t border-gray-200">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-rajdhani text-3xl sm:text-4xl font-bold text-[#041424] py-8">
              Terms of Use
            </h2>
            {allPolicies.termsOfUse.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="py-12 border-b border-gray-200 last:border-0"
              >
                <h3 className="font-rajdhani text-2xl font-bold text-[#041424] mb-6">
                  {section.title}
                </h3>

                {section.content && (
                  <p className="font-nunito text-[#686868] leading-relaxed mb-6">
                    {section.content}
                  </p>
                )}

                {section.items && (
                  <div className="space-y-3">
                    {section.items.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="text-[#006CB0] mt-[6px] flex-shrink-0">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span className="font-nunito text-[#686868] leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
              <h2 className="font-rajdhani text-2xl font-bold text-[#041424] mb-6">
                Contact Information
              </h2>
              <p className="font-nunito text-[#686868] leading-relaxed mb-6">
                If you have any questions about our policies or legal documents, please contact us:
              </p>
              <div className="font-nunito text-[#686868] space-y-2">
                <p className="font-semibold">BafaTech Consulting</p>
                <p>
                  <a href="mailto:bafa@bafatechconsulting.com" className="text-[#006CB0] hover:underline">
                    bafa@bafatechconsulting.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}