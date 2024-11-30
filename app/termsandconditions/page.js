import React from 'react'

const page = () => {
  return (
    <section className=' h-full w-[100%] flex justify-center pb-10 '>
    <div className='text-[#fff] w-[80%]'>

    <div className=" py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold ">Terms and Conditions</h1>
          <p className="mt-2 text-lg">
            Welcome to <strong>LuckyStakes</strong>! These Terms and
            Conditions ("Terms") govern your use of our website, software, and services.
            By accessing or using our services, you agree to these Terms. If you do not
            agree with any part of these Terms, please refrain from using our services.
          </p>
        </header>

        <section className="space-y-8">
          <div id="definitions">
            <h2 className="text-2xl font-semibold ">1. Definitions</h2>
            <ul className="list-disc list-inside mt-3">
              <li><strong>"Company"</strong> refers to [Your Software House Name].</li>
              <li>
                <strong>"Client/User/Customer"</strong> refers to the person, business, or
                entity that uses our services or enters into a contract with us.
              </li>
              <li>
                <strong>"Services"</strong> refer to the software development, IT consulting, or
                other related services provided by the Company.
              </li>
              <li>
                <strong>"Deliverables"</strong> refer to the final product, software, or service
                provided to the Client as agreed upon.
              </li>
            </ul>
          </div>

          <div id="use-of-services">
            <h2 className="text-2xl font-semibold ">2. Use of Services</h2>
            <p className="mt-3">
              You agree to use our services solely for lawful purposes and in accordance
              with these Terms.
            </p>
            <p>
              You must not use our services for any activity that may harm, disrupt, or
              violate the rights of others or any applicable laws.
            </p>
            <p>
              Any content you provide to us must not infringe upon the intellectual
              property or privacy rights of any third party.
            </p>
          </div>

          <div id="intellectual-property">
            <h2 className="text-2xl font-semibold ">3. Intellectual Property</h2>
            <ul className="list-disc list-inside mt-3">
              <li>
                All intellectual property rights for software, code, designs, and other
                deliverables provided by the Company remain the property of the Company
                until full payment is received.
              </li>
              <li>
                Upon full payment, the intellectual property rights for the deliverables
                may be transferred to the Client unless otherwise specified in the agreement.
              </li>
              <li>
                The Client is not permitted to reproduce, sell, or distribute any
                materials or deliverables provided by the Company without prior written consent.
              </li>
            </ul>
          </div>

          <div id="confidentiality">
            <h2 className="text-2xl font-semibold ">4. Confidentiality</h2>
            <ul className="list-disc list-inside mt-3">
              <li>
                Both parties agree to maintain the confidentiality of all information shared
                during the course of the project or service.
              </li>
              <li>
                Confidential information includes, but is not limited to, business strategies,
                designs, source code, and other sensitive data.
              </li>
              <li>
                Confidentiality obligations shall remain in effect even after the termination
                of this agreement.
              </li>
            </ul>
          </div>

          <div id="payment-terms">
            <h2 className="text-2xl font-semibold ">5. Payment Terms</h2>
            <ul className="list-disc list-inside mt-3">
              <li>
                Payment terms, including fees and schedules, will be agreed upon in writing
                prior to the commencement of services.
              </li>
              <li>The Client must make payments on time as per the agreed schedule.</li>
              <li>
                Late payments may incur additional charges or result in suspension of
                services until the payment is made.
              </li>
              <li>
                Payments are non-refundable unless otherwise specified in a refund policy or
                specific agreement.
              </li>
            </ul>
          </div>

          <div id="limitation-liability">
            <h2 className="text-2xl font-semibold ">6. Limitation of Liability</h2>
            <ul className="list-disc list-inside mt-3">
              <li>
                The Company shall not be held liable for any damages, losses, or expenses
                arising from the use or inability to use our services, except in cases of
                proven gross negligence or willful misconduct.
              </li>
              <li>
                The Client is solely responsible for ensuring the compatibility and
                functionality of deliverables in their specific environment.
              </li>
            </ul>
          </div>

          <div id="project-timelines">
            <h2 className="text-2xl font-semibold ">7. Project Timelines</h2>
            <ul className="list-disc list-inside mt-3">
              <li>
                Project timelines will be agreed upon prior to the start of the project.
              </li>
              <li>
                Delays caused by the Client (e.g., late submission of materials, lack of
                response) may result in extensions to the agreed timeline.
              </li>
              <li>
                The Company shall not be held responsible for delays caused by unforeseen
                circumstances, such as technical issues or force majeure events.
              </li>
            </ul>
          </div>

          <div id="termination">
            <h2 className="text-2xl font-semibold ">8. Termination</h2>
            <ul className="list-disc list-inside mt-3">
              <li>
                Either party may terminate the agreement with written notice in the event
                of a breach of these Terms by the other party.
              </li>
              <li>
                Upon termination, the Client is obligated to pay for any completed work
                and expenses incurred up to the termination date.
              </li>
              <li>
                The Company reserves the right to terminate services if the Client fails
                to comply with these Terms.
              </li>
            </ul>
          </div>

          <div id="warranty-support">
            <h2 className="text-2xl font-semibold ">9. Warranty and Support</h2>
            <ul className="list-disc list-inside mt-3">
              <li>
                The Company will provide a warranty for the deliverables for a specified
                period (as agreed upon in the contract) to address any defects or bugs.
              </li>
              <li>
                Post-warranty support or maintenance services can be provided under a
                separate agreement or at an additional cost.
              </li>
            </ul>
          </div>

          <div id="indemnification">
            <h2 className="text-2xl font-semibold ">10. Indemnification</h2>
            <ul className="list-disc list-inside mt-3">
              <li>The Client agrees to indemnify and hold the Company harmless from any claims, liabilities, or damages.</li>
            </ul>
          </div>

          <div id="changes-to-terms">
            <h2 className="text-2xl font-semibold ">11. Changes to Terms</h2>
            <p>
              The Company reserves the right to update or modify these Terms at any time.
              Clients will be notified of significant changes, and continued use of the
              services after such changes constitutes acceptance of the revised Terms.
            </p>
          </div>

          <div id="governing-law">
            <h2 className="text-2xl font-semibold ">12. Governing Law</h2>
            <p>
              These Terms and any disputes arising from them will be governed by and construed in accordance with the laws of <strong>[Your Country/Region]</strong>.
            </p>
          </div>

          <div id="contact-information">
            <h2 className="text-2xl font-semibold ">13. Contact Information</h2>
            <p className="mt-3">
              <strong>LuckyStakes</strong>
            </p>
            <p>Email: luckystakesofficial@gmail.com</p>
            <p>Address: Plot No. 27/11, Saba Avenue, Street 31, Phase- V, DHA, Karachi</p>
          </div>
        </section>
      </div>
    </div>
        </div>
    </section>
  )
}

export default page