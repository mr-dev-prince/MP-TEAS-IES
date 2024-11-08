import React from 'react'

const ConferenceReviewers = () => {
    const data = [
        { name: "Deepak kumar jain", email: "deepak.jain.juet@gmail.com", organization: "dalian university" },
        { name: "Dr. B K Mishra", email: "bkmishra21@gmail.com", organization: "Chandigarh University, Punjab" },
        { name: "Madhvi Saxena", email: "madhvi.saxena@vupune.ac.in", organization: "Vishwakarma University Pune" },
        { name: "Dharmaraj Patil", email: "dharmaraj.rcpit@gmail.com", organization: "R.C.Patel Institute of Technology, Shirpur" },
        { name: "Nekita Rodricks Morris", email: "nekita.chavan@raisoni.net", organization: "Ghrce" },
        { name: "Dr. PREETI", email: "preeti@galgotiasuniversity.edu.in", organization: "GALGOTIASUNIVERSITY" },
        { name: "BIBHU DATTA SAHOO", email: "bdsahu@nitrkl.ac.in", organization: "NIT Rourkela" },
        { name: "Dr Prashant Lakkadwala", email: "lakk_21@yahoo.co.in", organization: "Acropolis Institute of Technology and Research" },
        { name: "Murtaza Abbas Rizvi", email: "marizvi@nitttrbpl.ac.in", organization: "NITTTR, Bhopal" },
        { name: "Dr. Ramakanta Mohanty", email: "ramakanta5a@gmail.com", organization: "Sree Dattha Institutions" },
        { name: "POORNA CHANDRA REDDY", email: "allapoorna.reddy@marwadieducation.edu.in", organization: "Marwadi university" },
        { name: "Prof. Brijesh Kumar Chaurasia", email: "bkchaurasia.itm@gmail.com", organization: "PSIT" },
        { name: "Anand Singh Jalal", email: "legendaryashwin17@gmail.com", organization: "PSIT" },
        { name: "Dr. Brijesh Kumar Chaurasia", email: "brijesh.chaurasia@psit.ac.in", organization: "Pranveer Singh Institute of Technology, Kanpur" },
        { name: "Ruchi Chaurasia", email: "avinashchaurasia708@gmail.com", organization: "PSIT" },
        { name: "Dr. Brijesh Kumar Chaurasia", email: "brijeshchaurasia@ieee.org", organization: "Pranveer Singh Institute of Technology" },
        { name: "Anshul Atre", email: "anshulatreimp@gmail.com", organization: "Amity University, Lucknow" },
        { name: "Ramnath Narhete", email: "ramnath@dstarena.com", organization: "onprice infotech pvt ltd" },
        { name: "Dr V Muralidharan", email: "muralivlsi5@gmail.com", organization: "Dr.N.G.P. Institute of Technology" },
        { name: "Soumya Bajpai", email: "soumyabajpai2013@gmail.com", organization: "IPs college of technology and management" },
        { name: "Dr K L V Sai Prakash Sakuru", email: "sai@nitw.ac.in", organization: "National Institute of Technology, Warangal" },
        { name: "Kunal P. Raghuwanshi", email: "kunalraghuwanshi24@gmail.com", organization: "VBMV,Dept.of MCA,Amravati" },
        { name: "DR MAHESH KUMAR SHARMA", email: "hodca@amrapali.ac.in", organization: "Amrapali University" },
        { name: "Kunal P Raghuvanshi", email: "kunalraghuwanshi24@gmail.com", organization: "VBMV,Dept.of MCA, Amravati" },
        { name: "Shyam Dnyaneshwar Bawankar", email: "shyam.bawankar@raisoni.net", organization: "GH Raisoni College of Engineering Nagpur" },
        { name: "Raju Gudla", email: "raju@iiitnr.edu.in", organization: "Dr SPM IIIT Naya Raipur" },
        { name: "Deepak Kumar", email: "Deepakkumar18207@gmail.com", organization: "TU Dresden, GERMANY" },
        { name: "NEETA NATHANI", email: "neetanathani@ggits.org", organization: "GYAN GANGA INSTITUTE OF TECHNOLOGY AND SCIENCES, JABALPUR" },
        { name: "Ajit Kumar Shrivastava", email: "ajitshrivastava@rediffmail.com", organization: "Sagar Institute of Science Technology & Research (SISTec-R), Bhopal" },
        { name: "Lucky Saxena", email: "luckysaxena@ieee.org", organization: "Acropolis Institute of technology and research, indore" },
        { name: "Dr. Pankaj Dashore", email: "dashorepankaj@gmail.com", organization: "Sandip University Nashik" },
        { name: "Vimmi Pandey", email: "vimmipandey@ggct.co.in", organization: "Gyan Ganga College of Technology" },
        { name: "Priyanka Gupta", email: "guptapriya071@gmail.com", organization: "GlA Mathura" },
        { name: "Mr. Shubham Mishra", email: "sbmmishra@gmail.com", organization: "G L A University, Mathura" },
        { name: "Joyanto Roychoudhary", email: "joyanto.roychoudhary296@msit.edu.in", organization: "Meghnad saha Institute of Technology" },
        { name: "Muthusamy Arumugam", email: "muthusamy.arumugam@gmail.com", organization: "Kongu Engineering College" },
        { name: "Dr. Jayashree Sathyanarayana Vaddin", email: "jayashreevaddin@gmail.com", organization: "DKTE’s Textile and Engineering Institute" },
        { name: "Samrat Chakraborty", email: "samratchakraborty@csmu.ac.in", organization: "Chhatrapati Shivaji Maharaj University" },
        { name: "Dr S. J Subhashini", email: "drsjsnhce@gmail.com", organization: "SRM Madurai College for Engineering and Technology" },
        { name: "Sunil Sridhara", email: "sunilsridharald@gmail.com", organization: "ABB GLOBAL INDUSTRIES AND SERVICES PVT LTD" },
        { name: "Dr Smita Sharma", email: "sharmasmita34@gmail.com", organization: "Government Women's Polytechnic College, Sehore" },
        { name: "Jawahar Sundaram", email: "shivamjawahar@gmail.com", organization: "Christ academy institute for advanced studies" },
        { name: "Dr Suneet Kumar", email: "suneetcit81@gmail.com", organization: "MMDU" },
        { name: "Dr Srisabarimani K", email: "srisabak@srmist.edu.in", organization: "SRM" },
        { name: "Dr. ARUN RAJ LAKSHMINARAYANAN", email: "Arunraj@crescent.education", organization: "BSA CRESCENT INSTITUTE OF SCIENCE AND TECHNOLOGY" },
        { name: "Senthil Kumaran R", email: "sen19841@gmail.com", organization: "" },
        { name: "Sivakumar Poruran", email: "sivakumar.poruran@gmail.com", organization: "Dr NGP Institute of Technology Coimbatore" },
        { name: "R.Michaelraj Kingston", email: "king.pane@gmail.com", organization: "Sri Eshwar College of Engineering" },
        { name: "Dr. Achyutha Prasad N", email: "hodcse@ewit.edu.in", organization: "East West Institute of Technology" },
        { name: "S Sowndeswari", email: "sowndeswari@yahoo.co.in", organization: "Sambhram Institute of Technology" },
        { name: "Dr.Vijayalakshmi. M N", email: "vijayalakshmi@rvce.edu.in", organization: "RV College of Engineering" },
        { name: "Lakshmaiah Alluri", email: "laxman@cdac.in", organization: "cdac" },
        { name: "Mahesh Kumar N", email: "mahesh-ece@dayanandasagar.edu", organization: "Dayanandasagar College of Engineering" },
        { name: "Chitralekha Jena", email: "chitralekha.jenafel@kiit.ac.in", organization: "KIIT Deemed to be University" },
        { name: "Dr. Nikhil Wyawahare", email: "nikhil.wyawahare@raisoni.net", organization: "G H Raisoni College of Engineering" },
        { name: "B.R. Mohan", email: "mohan.bangalore77@gmail.com", organization: "East West Institute of Technology" },
        { name: "Pijush Barthakur", email: "pijush.barthakur@gmail.com", organization: "KLS Gogte Institute of Technology" },
        { name: "Gurusubramani S", email: "gurusubramani.cse@sairam.edu.in", organization: "Sri Sairam Engineering College" },
        { name: "Dr. Gopala T", email: "gopala.ssit@gmail.com", organization: "Sri Siddhartha Institute of Technology" },
        { name: "Dr. Sampada Shyam Wazalwar", email: "sampadawazalwar@gmail.com", organization: "G H Raisoni College of Engineering, Nagpur" },
        { name: "Raghu N", email: "n.raghu@jainuniversity.ac.in", organization: "Jain University" },
        { name: "Sunitha M R", email: "sunithamr2310@gmail.com", organization: "Adichunchanagiri Institute of Technology" },
        { name: "Parameswaran Ramesh", email: "parameswaran0789@gmail.com", organization: "Madras Institute of Technology" },
        { name: "Krishna Chaithanya Janapati", email: "janapatikrishnachaithanya@gmail.com", organization: "Vardhaman College of Engineering, Hyderabad - 501 218" },
        { name: "Sanjaya Kumar Sarangi", email: "sanjaya.res.cs@utkaluniversity.ac.in", organization: "Utkal University" },
        { name: "Dr. Shubham Mahajan", email: "mahajanshubham2232579@gmail.com", organization: "Amity University, Haryana" },
        { name: "Prashant Kumar S Chinamalli", email: "prashantvnec@gmail.com", organization: "Sharnbasva University Kalaburagi" },
        { name: "Dr. Manjula G", email: "manjulayash1@gmail.com", organization: "BGS College of Engineering and Technology" },
        { name: "Dr. Jayashree C Nidagundi", email: "jayaprajwal8@gmail.com", organization: "SDM College of Engineering & Technology, Dharwad" },
        { name: "J R K Kumar Dabbakuti", email: "kirankumar.au@gmail.com", organization: "Koneru Lakshmaiah Education Foundation (Deemed to be University)" },
        { name: "Dr. Gaurav Soni", email: "GAURAV.E9610@CUMAIL.IN", organization: "Chandigarh University" },
        { name: "Dr. R. Ashok Kumar", email: "ashokkumar.ise@bmsce.ac.in", organization: "BMS College of Engineering, Bangalore" },
        { name: "Vasudevan B", email: "vasudevb@srmist.edu.in", organization: "SRM Institute of Science and Technology, Kattangulathur" },
        { name: "Om Prakash Yadav", email: "omprakashelex@gmail.com", organization: "PES Institute of Technology and Management, Shivamogga, Karnataka" }
    ];



    return (
        <div className="px-4 sm:px-12 lg:px-36 mb-24 flex justify-center items-center flex-col">
            <h2 className="text-center font-bold text-lg sm:text-xl py-4 sm:py-6">
                Conference Reviewers
            </h2>
            <div className="w-full overflow-x-auto">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 px-2 sm:px-4 py-2 text-center">Name</th>
                            <th className="border border-gray-300 px-2 sm:px-4 py-2">Organization</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 px-2 sm:px-4 py-2 text-left">{row.name}</td>
                                <td className="border border-gray-300 px-2 sm:px-4 py-2 text-left">{row.organization}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default ConferenceReviewers