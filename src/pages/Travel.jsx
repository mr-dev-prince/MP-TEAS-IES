import React from "react";

const Travel = () => {
  return (
    <div className="md:px-16 px-5 my-3">
      <div>
        <p className="md:text-5xl text-2xl text-center font-serif font-bold">
          Travel & Visa
        </p>
        <div className="h-1 mt-2 rounded-xl bg-gradient-to-r from-white via-black to-white relative" />
      </div>
      <div className="md:px-16 mt-5 text-lg text-justify tracking-wide space-y-3">
        <p>
          Please send an email to <strong>mpteas2024@iesbpl.ac.in</strong> for
          VISA Letter if required.
        </p>
        <p className="font-semibold text-center text-2xl">Travel & Visa</p>
        <p className="font-semibold text-xl">VISA INFORMATION</p>
        <p>
          Please contact the Indian High Commission/Embassy nearest to your
          current location and complete necessary formalities to obtain an entry
          visa to India. If you require a formal letter of invitation from the
          organizers of MP-TEAS 2024, please contact us at{" "}
          <strong>mpteas2024@iesbpl.ac.in</strong>. However, delegates of the
          following countries can obtain VISA ON ARRIVAL facility.
        </p>
        <p className="font-semibold underline">
          e-Tourist Visa Facility is available for nationals of the following
          countries/territories:
        </p>
        <p>
          Albania, Andorra, Anguilla, Antigua & Barbuda, Argentina, Armenia,
          Aruba, Australia, Austria, Bahamas, Barbados, Belgium, Belize,
          Bolivia, Bosnia & Herzegovina, Botswana, Brazil, Brunei, Bulgaria,
          Cambodia, Canada, Cape Verde, Cayman Island, Chile, China, China- SAR
          Hongkong, China- SAR Macau, Colombia, Comoros, Cook Islands, Costa
          Rica, Cote d'lvoire, Croatia, Cuba, Czech Republic, Denmark, Djibouti,
          Dominica, Dominican Republic, East Timor, Ecuador, El Salvador,
          Eritrea, Estonia, Fiji, Finland, France, Gabon, Gambia, Georgia,
          Germany, Ghana, Greece, Grenada, Guatemala, Guinea, Guyana, Haiti,
          Honduras, Hungary, Iceland, Indonesia, Ireland, Israel, Jamaica,
          Japan, Jordan, Kenya, Kiribati, Laos, Latvia, Lesotho, Liberia,
          Liechtenstein, Lithuania, Luxembourg, Madagascar, Malawi, Malaysia,
          Malta, Marshall Islands, Mauritius, Mexico, Micronesia, Moldova,
          Monaco, Mongolia, Montenegro, Montserrat, Mozambique, Myanmar,
          Namibia, Nauru, Netherlands, New Zealand, Nicaragua, Niue Island,
          Norway, Oman, Palau, Palestine, Panama, Papua New Guinea, Paraguay,
          Peru, Philippines, Poland, Portugal, Republic of Korea, Republic of
          Macedonia, Romania, Russia, Saint Christopher and Nevis, Saint Lucia,
          Saint Vincent & the Grenadines, Samoa, San Marino, Senegal, Serbia,
          Seychelles, Singapore, Slovakia, Slovenia, Solomon Islands, South
          Africa, Spain, Sri Lanka, Suriname, Swaziland, Sweden, Switzerland,
          Taiwan, Tajikistan, Tanzania, Thailand, Tonga, Trinidad & Tobago,
          Turks & Caicos Island, Tuvalu, UAE, Ukraine, United Kingdom, Uruguay,
          USA, Vanuatu, Vatican City-Holy See, Venezuela, Vietnam, Zambia and
          Zimbabwe.
        </p>
        <p>
          Passport holders or residents of the countries listed below are
          required to complete their documentation in consultation with MHA and
          conference organizers:
        </p>
        <ul className="list-disc pl-5">
          <li>Afghanistan</li>
          <li>China</li>
          <li>Iran</li>
          <li>Iraq</li>
          <li>Pakistan</li>
          <li>Sudan</li>
          <li>Foreigners of Pakistani origin</li>
          <li>Stateless persons</li>
        </ul>
        <p>
          In case authors of accepted papers are refused to issue VISA, then{" "}
          <strong>SKYPE presentation</strong> can be organized during the
          conference period.
        </p>
      </div>
    </div>
  );
};

export default Travel;
