import React from 'react';

const ConferenceInfo = () => {
  return (
    <div className="conference-info-container px-20 py-10">
      <h1 className="text-2xl font-bold mb-4">Conference Information</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Conference Webpage and Call for Papers</h2>
        <p><a href="https://jecrcconference.in/iceteas2024" className="text-blue-500 underline">Conference Webpage and Call for Papers</a></p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Conference Details</h2>
        <p><strong>Where:</strong> Department of Computer Science Engineering at IES University, Ratibad main road, Bhopal</p>
        <p><strong>When:</strong> 22nd – 24th Nov 2024</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Conference Theme</h2>
        <p>
          This conference, titled "Modern Practises and Trends in Expert Applications and Security" (MP-TEAS 2024), will be held in Bhopal, Madhya Pradesh, India. The conference aims to encourage the translation of intelligent ICT systems and machine learning applications into real-world applications. It also seeks presentations on new developments and research findings in computer science, engineering applications, and security of Expert Applications.
        </p>
        <p>
          MP-TEAS 2024 aims to provide a forum for researchers and industry practitioners to build business or research relationships, find global partners for future collaborations, and share state-of-the-art knowledge gained from their research work and practical developments. The "Expert Applications" theme will focus on advancements in expert systems and their role in maintaining academic standards.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Conference Organizers and Boards</h2>
        <ul className="list-disc list-inside">
          <li>Department of Computer Science Engineering, IES University, Bhopal</li>
          <li>Department of Computer Science Engineering, IES College of Technology, Bhopal</li>
          <li>IEEE M.P. SECTION</li>
          <li>ACM Student Chapter, IES College of Technology, Bhopal</li>
          <li>Institution of Electronics and Telecommunication Engineers Chapter, (IETE), Bhopal</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Conference History</h2>
        <p>This is the First Version in the Series of MP-TEAS Conference</p>
        <p>However, the IES University, Bhopal has organized the following key events previously:</p>
        <ul className="list-disc list-inside">
          <li>
            1st IEEE International Conference on “Big Data & Machine Learning, ICBDML-2024, Bhopal, 24-25 Feb 2024, IES University, Bhopal (Preceding IEEE Xplore).
            <br />Participants: 150
          </li>
          <li>
            3rd International Conference on Universal Threats In Expert Applications & Solutions UNI-TEAS 2024 on 8th -9th January 2024 at IES University, Bhopal in association with Shree KKarni Universe College, Jaipur (Proceedings under process for publication by Springer Nature’s LNNS Series, expected by Sept 2024).
            <br />Participants: 250
          </li>
          <li>
            2023 3rd International Conference on Energy, Power and Electrical Engineering (EPEE2023) on 15 to 17th September 2023 at IES University, Bhopal in association with MANIT, Bhopal, hosted by Huazhong University of Science and Technology, China (Faculty of Engineering and Science, University of Agder, Norway).
          </li>
          <li>
            International Conference on “Education Technology” In association with IETE Bhopal Chapter and IQAC Cell from 12 February 2022 to 15 February 2022.
            <br />Participants: 70
          </li>
          <li>
            International Conference on “Cybergogy in the Digital Education and Engineering in association with IETE Professional Society from 20 to 21 April 2022.
            <br />Participants: 80
          </li>
          <li>
            Three Days Online Faculty Development Program on “Developing Outcome Based Curriculum and Digital Pedagogy” in association with IETE Professional Society from 20th December, 2021 to 22th December, 2021.
            <br />Participants: 50
          </li>
          <li>
            Faculty Development Program on “Recent Development and limitations of 5G Technology” on 29/07/2020 under TEQIP RGPV Bhopal.
            <br />Participants: 110
          </li>
          <li>
            National Seminar on Different Channel Coding Techniques For 5G Network And Future Implementations 2017-18 sponsored by ISRO.
            <br />Participants: 50
          </li>
          <li>
            National Seminar on “Enabling Geospatial Technology for Smart City Services and Application” 2017-18 sponsored by ISRO.
            <br />Participants: 50
          </li>
          <li>
            National Seminar on Advancement of Smart Antenna 2016-17 sponsored by ISRO.
            <br />Participants: 50
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Expected Participants</h2>
        <p>We expect 400-500 participants from Tier-I and Tier-II institutions of India, as well as from the USA, UK, Canada, France, China, Korea, Taiwan, Vietnam, Australia, Hong Kong, Italy, The Netherlands, and other European countries.</p>
        <p><strong>% from Domestic:</strong> 67%</p>
        <p><strong>% from Overseas:</strong> 33%</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Proceedings and Attendance Policy</h2>
        <p>Only proceedings financed by attendance fees and not by direct paper publication payment will be considered for publication. We agree to this policy.</p>
        <p>We expect that at least one of the authors for each article accepted in the book will attend the conference. If the author of an accepted paper does not register for the conference, their paper will not be included in the book. We agree to this policy.</p>
      </section>
    </div>
  );
};

export default ConferenceInfo;
