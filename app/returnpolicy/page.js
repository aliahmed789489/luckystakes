import React from 'react'

const page = () => {
  return (
    <section className=' h-full w-[100%] flex justify-center pb-10 '>
    <div className='text-[#fff] w-[80%]'>
        <div className="py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Refund Policy</h1>
          <p className="mt-2 text-lg">
            At <strong>LuckyStakes</strong>, we strive to deliver high-quality software
            solutions that meet the expectations of our clients. However, we understand that
            there may be instances where a refund request is necessary. This policy outlines
            the conditions under which refunds may be issued.
          </p>
        </header>

        <section className="space-y-8">
          <div id="custom-software-development">
            <h2 className="text-2xl font-semibold">1. Custom Software Development Projects</h2>

            <h3 className="text-lg font-semibold mt-4">1.1 Initial Deposit/Upfront Payment:</h3>
            <ul className="list-disc list-inside">
              <li>
                Initial deposits made at the start of a project are non-refundable. This payment
                is used to allocate resources and commence work on the project.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">1.2 Milestone Payments:</h3>
            <ul className="list-disc list-inside">
              <li>
                Refunds for milestone payments are only available if no work has been delivered
                for the specific milestone.
              </li>
              <li>
                If partial work has been delivered, refunds may be issued based on the percentage
                of incomplete work, subject to an internal review.
              </li>
            </ul>

            <h3 className="text-lg font-semibold mt-4">1.3 Completed Projects:</h3>
            <ul className="list-disc list-inside">
              <li>
                Refunds will not be issued for completed and delivered projects, as all final
                deliverables are approved by the client during the review process.
              </li>
            </ul>
          </div>

          <div id="software-licenses">
            <h2 className="text-2xl font-semibold">2. Software Licenses</h2>
            <ul className="list-disc list-inside mt-3">
              <li>
                Licenses for software products developed by <strong>LuckyStakes</strong> are
                non-refundable once delivered and activated.
              </li>
              <li>
                Refunds may be issued if a license key is proven to be non-functional and cannot
                be replaced.
              </li>
            </ul>
          </div>

          <div id="support-maintenance">
            <h2 className="text-2xl font-semibold">3. Support and Maintenance Services</h2>
            <ul className="list-disc list-inside mt-3">
              <li>
                Refunds for monthly or annual support and maintenance plans are not available
                once the service period has commenced.
              </li>
              <li>
                In cases where services were not provided as promised, a partial refund may be
                considered after an internal investigation.
              </li>
            </ul>
          </div>

          <div id="cancellation-by-client">
            <h2 className="text-2xl font-semibold">4. Cancellation by the Client</h2>
            <ul className="list-disc list-inside mt-3">
              <li>
                If the client decides to cancel a project before any work has commenced, a full
                refund of the initial payment may be issued.
              </li>
              <li>
                If the project is canceled after work has started, the refund amount will depend
                on the amount of work completed up to that point.
              </li>
            </ul>
          </div>

          <div id="cancellation-by-company">
            <h2 className="text-2xl font-semibold">5. Cancellation by LuckyStakes</h2>
            <ul className="list-disc list-inside mt-3">
              <li>
                If the project is canceled by <strong>LuckyStakes</strong> for reasons beyond
                the client&quot;s control, a full refund will be issued for the uncompleted portions
                of the project.
              </li>
            </ul>
          </div>

          <div id="disputes-resolutions">
            <h2 className="text-2xl font-semibold">6. Disputes and Resolutions</h2>
            <p className="mt-3">
              In case of any disputes regarding deliverables or payments, both parties agree to
              attempt resolution through mutual discussion before seeking third-party arbitration.
            </p>
          </div>

          <div id="requesting-refund">
            <h2 className="text-2xl font-semibold">7. Requesting a Refund</h2>
            <ul className="list-disc list-inside mt-3">
              <li>
                Refund requests must be submitted in writing within 14 days of the issue arising.
              </li>
              <li>
                Requests can be sent to <a href="mailto:email@example.com" className="underline">
                  email@example.com
                </a> with detailed reasons and supporting documents if any.
              </li>
            </ul>
          </div>

          <div id="non-refundable-conditions">
            <h2 className="text-2xl font-semibold">8. Non-Refundable Conditions</h2>
            <p className="mt-3">Refunds will not be issued under the following circumstances:</p>
            <ul className="list-disc list-inside mt-3">
              <li>Change of mind or project scope by the client after approval.</li>
              <li>
                Delays caused by the client, including lack of communication or late provision of
                necessary inputs.
              </li>
              <li>Third-party issues or incompatibility not related to LuckyStakes.</li>
            </ul>
          </div>

          <div id="exceptions">
            <h2 className="text-2xl font-semibold">9. Exceptions</h2>
            <p className="mt-3"> 
              Any exceptions to this policy will be made at the sole discretion of <strong>LuckyStakes</strong>.
            </p>
          </div>
        </section>
      </div>
    </div>
    </div>
    </section>
  )
}

export default page