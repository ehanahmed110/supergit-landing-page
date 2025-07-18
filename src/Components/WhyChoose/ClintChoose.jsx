import React from "react";

export function ClintChoose() {
  const partners = [
    "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/qimh3jbmtwv1gs5toxgb",
    "https://thearabianmirror.com/wp-content/uploads/2025/04/Australia-21.jpg",
    "https://seeklogo.com/images/S/saudi-banks-logo-5E702674C0-seeklogo.com.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLS5Ifh4KSCb2lh634Kl4QKhjs9Yq-YB-k0g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwbhgTdXw_Oah6F7NTjH5r-jva-97JZm5CbA&s"
  ];
  return (
    <React.Fragment>
      <div className="pt-10 text-center">
        <h3 className="text-3xl font-bold text-gray-700 ">
          Trusted by Leading SuperGit{" "}
          <span className="bg-gradient-to-r from-[#f14f3e] to-[#fab768] bg-clip-text text-transparent italic">
            {" "}
            Providers
          </span>
        </h3>
        <div className="flex items-center justify-center flex-wrap gap-6">
          {partners.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`partner-${i}`}
              className="h-24 w-38  transition cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={i * 100}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
