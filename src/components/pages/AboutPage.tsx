// app/about/page.tsx (or AboutPage.jsx and export default)
import { Building2, Globe, Award, Users, TrendingUp, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../theme/../figma/ImageWithFallback"; // adjust path if needed

export default function AboutPage() {
    // Static theme colors to avoid client-side hooks
    const colors = {
        text: "#111827",      // similar to gray-900
        accent: "#A62828",    // your brand red
        primary: "#A62828",
    };

    const values = [
        {
            icon: Building2,
            title: "Mission",
            desc: "Revolutionize urban governance through technology",
        },
        {
            icon: Award,
            title: "Excellence",
            desc: "Highest quality services across all projects",
        },
        {
            icon: Users,
            title: "Collaboration",
            desc: "Partner with ULBs to solve unique challenges",
        },
        {
            icon: TrendingUp,
            title: "Innovation",
            desc: "Cutting-edge technology solutions",
        },
    ];

    const whyChooseUs = [
        "25+ years of proven expertise in municipal services",
        "100+ successful ULB implementations across Maharashtra",
        "50+ lakh properties accurately surveyed and digitized",
        "Advanced GIS mapping and mobile technology",
        "Seamless integration with government portals",
        "Dedicated support and continuous innovation"
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Background Image */}
            <div className="relative pt-20 h-[60vh] sm:h-[65vh] md:h-[70vh] min-h-[500px] sm:min-h-[550px] md:min-h-[600px] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <ImageWithFallback
                        src="/image_data/Website_Hero_Section/aboutpage.avif"
                        alt="City Governance Technology Background"
                        className="w-full h-full object-cover mt-6 pt-8"
                        style={{
                            objectPosition: "center",
                        }}
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/30 to-black/40" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 md:px-8">
                    <div className="text-center max-w-5xl mx-auto">
                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-5 text-white px-4"
                            style={{ fontWeight: 700 }}
                        >
                            Empowering ULBs for Property Tax
                            <br />
                            <span style={{ color: "white" }}>
                                Revenue Generation and Management
                            </span>
                        </h1>

                        <p className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-200 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
                            Leading the transformation of municipal governance with innovative technology,
                            trusted expertise, and unwavering commitment to excellence
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 pt-4 pb-8">
                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {/* Our Story */}
                    <div>
                        <div className="mb-4">
                            <div
                                className="w-16 h-1 mb-3 rounded-full"
                                style={{ backgroundColor: colors.accent }}
                            />
                            <h2
                                className="text-3xl mb-4"
                                style={{ fontWeight: 700, color: colors.text }}
                            >
                                Our Story
                            </h2>
                        </div>

                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                For over two and a half decades, Sthapatya Consultants Pvt. Ltd. has been a trusted
                                name in transforming municipal governance through innovation, precision, and technology.
                                With a strong foundation in property tax survey, GIS-based asset mapping, e-governance
                                systems, and smart municipal solutions, we have successfully partnered with over 150
                                Urban Local Bodies (ULBs) across Maharashtra and India.
                            </p>
                            <p>
                                Our journey reflects a legacy of excellence from manual surveys to AI-driven smart
                                governance maintaining our core values of integrity, trust, and performance. As we
                                step into the future, we continue to innovate through AI, cloud infrastructure,
                                blockchain-enabled verification, and citizen-centric mobile solutions, ensuring that
                                governance is not only digital but also intelligent, inclusive, and sustainable.
                            </p>
                            <p
                                className="px-6 py-4 bg-gray-50 rounded-xl border-l-4 italic"
                                style={{ borderLeftColor: colors.primary }}
                            >
                                &quot;Transforming urban governance through innovation, dedication, and excellence&quot;
                            </p>

                            <div className="mt-6 p-6 bg-gray-50 rounded-xl border-2 border-gray-200">
                                <div className="flex items-center justify-between h-full gap-4 sm:gap-6">
                                    <img
                                        src="/image_data/AboutPage/1.avif"
                                        alt="Logo 1"
                                        className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
                                    />
                                    <img
                                        src="/image_data/AboutPage/2.avif"
                                        alt="Logo 2"
                                        className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
                                    />
                                    <img
                                        src="/image_data/AboutPage/3.avif"
                                        alt="Logo 3"
                                        className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
                                    />
                                    <img
                                        src="/image_data/AboutPage/4.avif"
                                        alt="Logo 4"
                                        className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Core Values */}
                    <div>
                        <div className="mb-4">
                            <h2
                                className="text-3xl mb-4"
                                style={{ fontWeight: 700, color: colors.text }}
                            >
                                Core Values
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className="p-6 bg-gray-50 rounded-xl border-2 border-transparent hover:border-gray-200 transition-all"
                                >
                                    <div
                                        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                                        style={{ backgroundColor: `${colors.accent}20` }}
                                    >
                                        <value.icon size={24} style={{ color: colors.accent }} />
                                    </div>
                                    <h3
                                        className="text-xl mb-2"
                                        style={{ fontWeight: 600, color: colors.text }}
                                    >
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600">{value.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-6">
                            {/* Left card */}
                            <div className="w-full sm:w-1/2 bg-gray-50 rounded-xl border-2 border-gray-200 p-6 flex justify-center items-center gap-6">
                                <img
                                    src="/image_data/AboutPage/5.avif"
                                    alt="Logo 5"
                                    className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
                                />
                                <img
                                    src="/image_data/AboutPage/6.avif"
                                    alt="Logo 6"
                                    className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
                                />
                            </div>

                            {/* Right card */}
                            <div className="w-full sm:w-1/2 bg-gray-50 rounded-xl border-2 border-gray-200 p-6 flex justify-center items-center gap-6">
                                <img
                                    src="/image_data/AboutPage/7.avif"
                                    alt="Logo 7"
                                    className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
                                />
                                <img
                                    src="/image_data/AboutPage/8.avif"
                                    alt="Logo 8"
                                    className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border-2 border-gray-200">
                    <h2
                        className="text-3xl mb-6 text-center"
                        style={{ fontWeight: 700, color: colors.text }}
                    >
                        Why Choose Us
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                        {whyChooseUs.map((point, index) => (
                            <div key={index} className="flex items-start gap-3">
                                <CheckCircle
                                    size={20}
                                    style={{ color: colors.accent }}
                                    className="flex-shrink-0 mt-1"
                                />
                                <p className="text-gray-700">{point}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
