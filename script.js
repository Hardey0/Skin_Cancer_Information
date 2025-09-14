// ---------- PubMed API Key ----------
const apiKey = "4be97f1f842961136bfb0cdfcb15d11ace09"; // your key

            const skinCancerData = {
                melanoma: {
                    name: "Melanoma",
                    category: "Malignant",
                    subtitle: "The most serious type of skin cancer",
                    image: "img/Melanoma.jpg",
                    causes: [
                        "Excessive UV radiation from sun or tanning beds",
                        "Genetic predisposition and family history",
                        "Multiple atypical moles (dysplastic nevi)",
                        "Fair skin, light hair, and light eyes",
                        "History of severe sunburns, especially in childhood"
                    ],
                    riskFactors: [
                        "Age over 50 (though can occur at any age)",
                        "Male gender (slightly higher risk)",
                        "Personal history of melanoma or other skin cancers",
                        "Weakened immune system",
                        "Living in areas with intense UV radiation"
                    ],
                    symptoms: [
                        "New mole or growth on the skin",
                        "Changes in existing moles (ABCDE rule)",
                        "Asymmetry in mole shape",
                        "Border irregularities",
                        "Color variations within the same mole",
                        "Diameter larger than 6mm",
                        "Evolution or changes over time",
                        "Itching, bleeding, or crusting"
                    ],
                    diagnosis: [
                        "Visual skin examination by dermatologist",
                        "Dermoscopy (dermatoscope examination)",
                        "Biopsy of suspicious lesions",
                        "Sentinel lymph node biopsy if needed",
                        "CT, MRI, or PET scans for staging",
                        "Blood tests including LDH levels"
                    ],
                    treatment: [
                        "Wide excision surgery (primary treatment)",
                        "Immunotherapy (pembrolizumab, nivolumab)",
                        "Targeted therapy (BRAF, MEK inhibitors)",
                        "Radiation therapy in specific cases",
                        "Chemotherapy (less common now)",
                        "Clinical trials for advanced cases"
                    ],
                    prevention: [
                        "Use broad-spectrum SPF 30+ sunscreen daily",
                        "Avoid peak sun hours (10 AM - 4 PM)",
                        "Wear protective clothing and wide-brimmed hats",
                        "Seek shade whenever possible",
                        "Avoid tanning beds completely",
                        "Regular self-examinations and annual dermatologist visits"
                    ]
                },
                bcc: {
                    name: "Basal Cell Carcinoma (BCC)",
                    category: "Malignant",
                    subtitle: "The most common type of skin cancer",
                    image: "img/BCC.jpg",
                    causes: [
                        "Chronic UV exposure from sun",
                        "Cumulative sun damage over years",
                        "Fair skin that burns easily",
                        "Genetic mutations in skin cells",
                        "Previous radiation therapy"
                    ],
                    riskFactors: [
                        "Age over 40 (most common after 50)",
                        "Fair complexion",
                        "Male gender",
                        "History of frequent sun exposure",
                        "Living in sunny climates",
                        "Outdoor occupation or hobbies",
                        "Family history of skin cancer"
                    ],
                    symptoms: [
                        "Pearly or waxy bump on skin",
                        "Flat, flesh-colored or brown scar-like lesion",
                        "Bleeding or scabbing sore that heals and returns",
                        "Pink growth with raised edges",
                        "Open sore that doesn't heal within weeks",
                        "Shiny nodule that may be pink, red, or white"
                    ],
                    diagnosis: [
                        "Clinical examination by healthcare provider",
                        "Dermoscopy for detailed visualization",
                        "Shave or punch biopsy",
                        "Pathological examination of tissue",
                        "Mapping of tumor borders if large"
                    ],
                    treatment: [
                        "Mohs micrographic surgery (most effective)",
                        "Standard excision with margins",
                        "Electrodesiccation and curettage",
                        "Cryotherapy (freezing with liquid nitrogen)",
                        "Topical medications (imiquimod, 5-fluorouracil)",
                        "Photodynamic therapy",
                        "Radiation therapy for inoperable cases"
                    ],
                    prevention: [
                        "Daily use of broad-spectrum sunscreen",
                        "Protective clothing and hats",
                        "Sunglasses with UV protection",
                        "Avoid midday sun exposure",
                        "Regular skin self-examinations",
                        "Annual skin checks by dermatologist",
                        "Avoid artificial UV sources"
                    ]
                },
                scc: {
                    name: "Squamous Cell Carcinoma (SCC)",
                    category: "Malignant",
                    subtitle: "Second most common skin cancer type",
                    image: "img/SCC.jpg",
                    causes: [
                        "Prolonged UV radiation exposure",
                        "HPV (Human Papillomavirus) infection",
                        "Chronic wounds or scars",
                        "Chemical exposure (arsenic, tar)",
                        "Chronic inflammatory conditions",
                        "Immunosuppression"
                    ],
                    riskFactors: [
                        "Fair skin and light hair",
                        "Age over 50",
                        "Male gender",
                        "Extensive sun exposure history",
                        "Outdoor workers",
                        "Previous skin cancer",
                        "Organ transplant recipients",
                        "Chronic skin ulcers or burns"
                    ],
                    symptoms: [
                        "Firm, red nodule on skin",
                        "Flat lesion with scaly, crusted surface",
                        "Open sore or ulcer that doesn't heal",
                        "Raised area with central depression",
                        "Wart-like growth",
                        "Rough, scaly patch that may bleed",
                        "Horn-like growth (cutaneous horn)"
                    ],
                    diagnosis: [
                        "Physical examination of the lesion",
                        "Medical history assessment",
                        "Biopsy (shave, punch, or incisional)",
                        "Histopathological analysis",
                        "Staging if metastasis suspected",
                        "Imaging studies for advanced cases"
                    ],
                    treatment: [
                        "Surgical excision with clear margins",
                        "Mohs micrographic surgery",
                        "Electrodesiccation and curettage",
                        "Cryosurgery",
                        "Radiation therapy",
                        "Topical chemotherapy",
                        "Immunotherapy for advanced cases",
                        "Lymph node dissection if spread"
                    ],
                    prevention: [
                        "Sun protection with SPF 30+ sunscreen",
                        "Protective clothing and wide-brimmed hats",
                        "Avoid peak UV hours",
                        "No tanning beds or artificial UV",
                        "HPV vaccination when appropriate",
                        "Proper wound care to prevent chronic ulcers",
                        "Regular skin examinations"
                    ]
                },
                "actinic-keratosis": {
                    name: "Actinic Keratosis",
                    category: "Precancerous",
                    subtitle: "Precancerous skin condition (potential to become SCC)",
                    image: "img/Actinic.jpg",
                    causes: [
                        "Cumulative sun exposure over many years",
                        "UV radiation damage to skin cells",
                        "Fair skin with poor tanning ability",
                        "Genetic predisposition",
                        "Age-related skin changes"
                    ],
                    riskFactors: [
                        "Age over 40",
                        "Fair skin, blonde or red hair",
                        "Light-colored eyes",
                        "History of frequent sunburns",
                        "Outdoor lifestyle or occupation",
                        "Living in sunny climates",
                        "Weakened immune system"
                    ],
                    symptoms: [
                        "Rough, scaly patches on sun-exposed skin",
                        "Flat to slightly raised lesions",
                        "Hard, warty surface",
                        "Color ranging from pink to red to brown",
                        "Size from few millimeters to 2-3 cm",
                        "Tender or burning sensation",
                        "Better felt than seen initially"
                    ],
                    diagnosis: [
                        "Clinical examination by dermatologist",
                        "Dermoscopy examination",
                        "Biopsy if appearance is atypical",
                        "Histopathological confirmation",
                        "Photography for monitoring changes"
                    ],
                    treatment: [
                        "Cryotherapy (liquid nitrogen freezing)",
                        "Topical 5-fluorouracil cream",
                        "Imiquimod cream (immune modifier)",
                        "Chemical peels",
                        "Photodynamic therapy",
                        "Electrodesiccation and curettage",
                        "Laser therapy",
                        "Regular monitoring for changes"
                    ],
                    prevention: [
                        "Rigorous sun protection measures",
                        "Daily broad-spectrum sunscreen use",
                        "Protective clothing and accessories",
                        "Avoid peak sun exposure times",
                        "Regular dermatological check-ups",
                        "Self-examination of skin",
                        "Early treatment of new lesions"
                    ]
                },
                "merkel-cell": {
                    name: "Merkel Cell Carcinoma",
                    category: "Malignant",
                    subtitle: "Rare but aggressive skin cancer",
                    image: "img/merkel.jpg",
                    causes: [
                        "Merkel Cell Polyomavirus (MCPyV) infection",
                        "Excessive UV radiation exposure",
                        "Immunosuppression",
                        "Advanced age",
                        "Fair skin"
                    ],
                    riskFactors: [
                        "Age over 70",
                        "Male gender",
                        "Fair skin",
                        "Extensive sun exposure",
                        "Immunocompromised state",
                        "History of other skin cancers",
                        "Organ transplant recipients"
                    ],
                    symptoms: [
                        "Fast-growing, painless nodule",
                        "Firm, flesh-colored to red or blue tumor",
                        "Dome-shaped or ulcerated appearance",
                        "Usually on sun-exposed areas",
                        "Rapid enlargement over weeks to months",
                        "May resemble a cyst or bug bite initially"
                    ],
                    diagnosis: [
                        "Clinical examination",
                        "Biopsy with immunohistochemistry",
                        "Imaging studies (CT, MRI, PET)",
                        "Sentinel lymph node biopsy",
                        "MCPyV testing",
                        "Complete staging workup"
                    ],
                    treatment: [
                        "Wide local excision",
                        "Sentinel lymph node biopsy",
                        "Radiation therapy",
                        "Immunotherapy (avelumab, pembrolizumab)",
                        "Chemotherapy for advanced disease",
                        "Multidisciplinary team approach"
                    ],
                    prevention: [
                        "Sun protection measures",
                        "Regular skin examinations",
                        "Prompt evaluation of new growths",
                        "Immune system support",
                        "Avoid excessive UV exposure",
                        "Annual dermatology visits for high-risk patients"
                    ]
                },
                "cutaneous-t-cell-lymphoma": {
                    name: "Cutaneous T-cell Lymphoma (Mycosis Fungoides)",
                    category: "Lymphoma",
                    subtitle: "A rare type of lymphoma that primarily affects the skin",
                    image: "img/cutaneous t-cell.jpg",
                    causes: [
                        "Malignant transformation of T-lymphocytes in the skin",
                        "Exact trigger is unknown but may involve genetic mutations",
                        "Chronic antigenic stimulation in skin",
                        "Immunodeficiency conditions",
                        "Environmental exposures (rarely implicated)"
                    ],
                    riskFactors: [
                        "Age over 50",
                        "Male gender",
                        "Weakened immune system",
                        "Family history of lymphoproliferative disorders",
                        "Previous long-term immunosuppressive therapy"
                    ],
                    symptoms: [
                        "Persistent, itchy, red patches or plaques",
                        "Thickened skin areas or tumors in advanced stages",
                        "Scaling or eczema-like appearance",
                        "Lesions may progress slowly over years",
                        "Swelling of nearby lymph nodes in advanced disease"
                    ],
                    diagnosis: [
                        "Skin biopsy with histopathology",
                        "Immunophenotyping of T-cells",
                        "Molecular studies for T-cell receptor gene rearrangement",
                        "Blood tests and imaging for staging",
                        "Patch, plaque, and tumor assessment"
                    ],
                    treatment: [
                        "Topical corticosteroids and retinoids",
                        "Phototherapy (UVB or PUVA)",
                        "Radiation therapy for localized disease",
                        "Systemic chemotherapy in advanced stages",
                        "Targeted immunotherapy and clinical trials"
                    ],
                    prevention: [
                        "Regular skin evaluations",
                        "Early biopsy of persistent or unusual lesions",
                        "Avoid prolonged immunosuppression if possible",
                        "Maintain immune health",
                        "Prompt treatment of infections or skin irritations"
                    ]
                },
                "sebaceous-gland-carcinoma": {
                    name: "Sebaceous Gland Carcinoma",
                    category: "Malignant",
                    subtitle: "Rare aggressive tumor arising from sebaceous glands, often in the eyelid",
                    image: "img/sebaceous gland.jpg",
                    causes: [
                        "Genetic mutations in sebaceous gland cells",
                        "Potential link to Muir-Torre syndrome",
                        "Chronic inflammation of sebaceous glands",
                        "Previous radiation exposure in the region",
                        "Advanced age"
                    ],
                    riskFactors: [
                        "Age over 60",
                        "History of Muir-Torre syndrome",
                        "Immunosuppression",
                        "Male gender slightly more affected",
                        "Previous ocular or eyelid radiation"
                    ],
                    symptoms: [
                        "Painless, firm nodule on the eyelid",
                        "Swelling or thickening of eyelid skin",
                        "Redness or discoloration around eyelid",
                        "Loss of eyelashes or abnormal eyelid appearance",
                        "Occasional ulceration in advanced cases"
                    ],
                    diagnosis: [
                        "Clinical examination by ophthalmologist or dermatologist",
                        "Biopsy of the lesion",
                        "Histopathological analysis for sebaceous differentiation",
                        "Immunohistochemistry to confirm sebaceous origin",
                        "Imaging if deeper invasion is suspected"
                    ],
                    treatment: [
                        "Surgical excision with wide margins",
                        "Mohs micrographic surgery for precise removal",
                        "Radiation therapy for inoperable cases",
                        "Lymph node evaluation if spread is suspected",
                        "Regular follow-up to monitor recurrence"
                    ],
                    prevention: [
                        "Early evaluation of persistent eyelid lesions",
                        "Prompt treatment of chronic eyelid inflammation",
                        "Regular ophthalmologic and dermatologic check-ups",
                        "Awareness of family history of Muir-Torre syndrome",
                        "Protect skin from excessive radiation exposure"
                    ]
                },
                "Angiosarcoma": {
                    name: "Angiosarcoma",
                    category: "Sarcoma",
                    subtitle: "Aggressive cancer of blood or lymph vessels",
                    image: "img/angiosarcoma2.jpg",
                    causes: [
                        "Chronic lymphedema (Stewart-Treves syndrome)",
                        "Radiation exposure",
                        "Genetic predisposition (rare)"
                    ],
                    riskFactors: [
                        "Older age (mostly 60+)",
                        "History of radiation therapy",
                        "Chronic lymphedema",
                        "Male gender slightly more common"
                    ],
                    symptoms: [
                        "Purple or red patches/bruise-like areas on skin",
                        "Swelling or raised nodules",
                        "Rapidly enlarging lesions",
                        "Pain or tenderness in affected area"
                    ],
                    diagnosis: [
                        "Skin biopsy with histopathology",
                        "Immunohistochemistry (CD31, CD34 markers)",
                        "Imaging: MRI, CT, or PET scan to check for metastasis"
                    ],
                    treatment: [
                        "Surgical excision with wide margins",
                        "Radiation therapy (adjuvant)",
                        "Chemotherapy for advanced disease (paclitaxel, doxorubicin)"
                    ],
                    prevention: [
                        "Minimize chronic lymphedema",
                        "Monitor irradiated areas for changes",
                        "Early detection through regular checkups"
                    ]
                },
                "Dermatofibrosarcoma Protuberans (DFSP)": {
                    name: "Dermatofibrosarcoma Protuberans (DFSP)",
                    category: "Sarcoma",
                    subtitle: "Slow-growing tumor of dermis",
                    image: "img/derma.jpg",
                    causes: [
                        "Unknown exact cause",
                        "Genetic mutation: COL1A1-PDGFB fusion"
                    ],
                    riskFactors: [
                        "Age 20–50 (mostly adults)",
                        "History of trauma or scars (rare link)"
                    ],
                    symptoms: [
                        "Firm, raised nodules or plaques",
                        "Usually painless",
                        "Slow-growing, may remain stable for years",
                        "May ulcerate in advanced stages"
                    ],
                    diagnosis: [
                        "Skin biopsy with histopathology",
                        "Immunohistochemistry (CD34 positive)",
                        "MRI/CT for large or deep tumors"
                    ],
                    treatment: [
                        "Wide local excision or Mohs surgery",
                        "Radiation therapy in selected cases",
                        "Targeted therapy (imatinib) for unresectable or recurrent DFSP"
                    ],
                    prevention: [
                        "Regular monitoring of suspicious skin lesions",
                        "Early biopsy of persistent nodules"
                    ]
                },
                "Leiomyosarcoma": {
                    name: "Leiomyosarcoma",
                    category: "Sarcoma",
                    subtitle: "Cancer of smooth muscle cells in skin",
                    image: "img/leio.jpg",
                    causes: [
                        "Exact cause unknown",
                        "May arise from pilar (arrector pili) muscles or vascular smooth muscle"
                    ],
                    riskFactors: [
                        "Age 50+",
                        "Male predominance",
                        "Radiation exposure (rare link)"
                    ],
                    symptoms: [
                        "Firm, painless nodules on skin",
                        "Slow-growing, may be red or brown",
                        "Occasionally tender or ulcerated"
                    ],
                    diagnosis: [
                        "Biopsy and histopathology",
                        "Immunohistochemistry: SMA, desmin positive",
                        "Imaging for depth and metastasis (CT, MRI)"
                    ],
                    treatment: [
                        "Surgical excision with wide margins",
                        "Radiation therapy for high-risk or recurrent lesions",
                        "Chemotherapy in metastatic cases (doxorubicin-based)"
                    ],
                    prevention: [
                        "Early evaluation of new skin nodules",
                        "Avoid radiation when possible",
                        "Regular skin checks"
                    ]
                },
                "kaposi-sarcoma": {
                    name: "Kaposi Sarcoma",
                    category: "Sarcoma",
                    subtitle: "Cancer caused by Human Herpesvirus-8 (HHV-8), often linked with immunosuppression",
                    image: "img/kapo.jpg",
                    causes: [
                        "Infection with Human Herpesvirus-8 (HHV-8)",
                        "Severely weakened immune system, such as in HIV/AIDS patients",
                        "Chronic inflammation and immunosuppressive medications",
                        "Genetic susceptibility and older age",
                        "History of organ transplantation or chemotherapy"
                    ],
                    riskFactors: [
                        "Immunocompromised state",
                        "HIV infection or AIDS",
                        "Older age",
                        "Male gender (higher incidence in men)",
                        "Individuals from regions endemic with HHV-8"
                    ],
                    symptoms: [
                        "Red, purple, or brown patches or nodules on skin or mucosa",
                        "Lesions may bleed or ulcerate",
                        "Swelling due to lymphatic involvement",
                        "Possible involvement of internal organs in advanced disease"
                    ],
                    diagnosis: [
                        "Physical and dermatologic examination",
                        "Skin biopsy with histopathology",
                        "Immunohistochemical staining for HHV-8 (LANA)",
                        "Imaging if deeper or visceral involvement suspected",
                        "HIV testing when appropriate"
                    ],
                    treatment: [
                        "Treat underlying immunosuppression (e.g., antiretroviral therapy)",
                        "Surgical excision or cryotherapy for localized lesions",
                        "Radiation therapy for symptomatic lesions",
                        "Systemic therapy (liposomal doxorubicin, paclitaxel, interferon-alpha) for extensive disease"
                    ],
                    prevention: [
                        "Effective HIV control and immune restoration",
                        "Regular dermatologic monitoring in immunosuppressed patients",
                        "Prompt evaluation of new lesions or swelling"
                    ]
                },


                "bowen-disease": {
                    name: "Bowen Disease (SCC in situ)",
                    category: "Precancerous",
                    subtitle: "Early form of squamous cell carcinoma confined to the epidermis",
                    image: "img/bowen.jpg",
                    causes: [
                        "Chronic UV exposure",
                        "HPV infection (certain subtypes)",
                        "Arsenic exposure",
                        "Immunosuppression"
                    ],
                    riskFactors: [
                        "Age over 50",
                        "Fair skin",
                        "History of sunburns",
                        "Outdoor occupations",
                        "Previous radiation"
                    ],
                    symptoms: [
                        "Slow-growing, well-demarcated scaly patch",
                        "Erythematous or brown plaque",
                        "Crusting or bleeding",
                        "Itching or tenderness"
                    ],
                    diagnosis: [
                        "Clinical exam and dermoscopy",
                        "Punch or shave biopsy",
                        "Histopathology showing full-thickness atypia"
                    ],
                    treatment: [
                        "Excision or Mohs surgery",
                        "Cryotherapy",
                        "Topical 5-fluorouracil or imiquimod",
                        "Photodynamic therapy",
                        "Curettage and electrodesiccation"
                    ],
                    prevention: [
                        "Sun protection and avoidance of tanning beds",
                        "Treat actinic keratoses promptly",
                        "HPV prevention strategies",
                        "Regular skin checks"
                    ]
                },
                "erythroplasia-of-queyrat": {
                    name: "Erythroplasia of Queyrat",
                    category: "Precancerous",
                    subtitle: "SCC in situ of the glans penis or vulva",
                    image: "img/erythroplasia.jpg",
                    causes: [
                        "High-risk HPV infection",
                        "Chronic irritation and inflammation",
                        "Poor hygiene",
                        "Phimosis (in men)"
                    ],
                    riskFactors: [
                        "Uncircumcised status (men)",
                        "Multiple sexual partners",
                        "Smoking",
                        "Immunosuppression"
                    ],
                    symptoms: [
                        "Well-demarcated, velvety red patch",
                        "Possible pain, pruritus, or bleeding",
                        "Non-healing lesion on mucosal skin"
                    ],
                    diagnosis: [
                        "Clinical evaluation",
                        "Biopsy for histologic confirmation",
                        "HPV testing when indicated"
                    ],
                    treatment: [
                        "Topical therapies (imiquimod, 5-FU)",
                        "Laser ablation or cryotherapy",
                        "Surgical excision for refractory cases"
                    ],
                    prevention: [
                        "HPV vaccination",
                        "Safe sexual practices",
                        "Smoking cessation",
                        "Regular examinations for high-risk individuals"
                    ]
                },
                "keratoacanthoma": {
                    name: "Keratoacanthoma",
                    category: "Malignant (SCC variant)",
                    subtitle: "Rapidly growing crateriform lesion; often considered a variant of SCC",
                    image: "img/keratoacanthoma.jpg",
                    causes: [
                        "UV exposure",
                        "Trauma (Koebner phenomenon)",
                        "Chemical carcinogens"
                    ],
                    riskFactors: [
                        "Older age",
                        "Fair skin",
                        "Chronic sun exposure",
                        "Immunosuppression"
                    ],
                    symptoms: [
                        "Rapidly growing dome-shaped nodule",
                        "Central keratin plug",
                        "May spontaneously regress"
                    ],
                    diagnosis: [
                        "Excisional or incisional biopsy",
                        "Histopathology to distinguish from SCC"
                    ],
                    treatment: [
                        "Complete surgical excision (preferred)",
                        "Mohs surgery in cosmetically sensitive areas",
                        "Intralesional methotrexate (selected cases)"
                    ],
                    prevention: [
                        "Sun protection",
                        "Avoid picking/trauma to lesions",
                        "Regular follow-up"
                    ]
                },
                "basosquamous-carcinoma": {
                    name: "Basosquamous Carcinoma",
                    category: "Malignant",
                    subtitle: "Hybrid tumor with features of BCC and SCC; higher recurrence risk",
                    image: "img/basosquamous.jpg",
                    causes: [
                        "Chronic UV exposure",
                        "Genetic alterations affecting hedgehog and p53 pathways"
                    ],
                    riskFactors: [
                        "Older age",
                        "Fair skin",
                        "History of BCC or SCC",
                        "Intense sun exposure"
                    ],
                    symptoms: [
                        "Ulcerated or indurated plaque or nodule",
                        "Irregular borders",
                        "May bleed or crust"
                    ],
                    diagnosis: [
                        "Biopsy with histopathology showing basaloid and squamous differentiation",
                        "Imaging for extensive disease"
                    ],
                    treatment: [
                        "Mohs micrographic surgery (preferred)",
                        "Wide local excision",
                        "Adjuvant radiation for high-risk cases"
                    ],
                    prevention: [
                        "Rigorous sun protection",
                        "Regular dermatologic surveillance"
                    ]
                },

};

// ---------- State Management ----------
let searchHistory = JSON.parse(localStorage.getItem("cancerSearchHistory") || "[]");
let currentResults = JSON.parse(sessionStorage.getItem("currentResults") || "[]");

// ---------- Elements ----------
const searchBar = document.getElementById("searchBar");
const results = document.getElementById("results");
const loadingSpinner = document.getElementById("loadingSpinner");

// ---------- Helper Functions ----------
function saveToStorage() {
    sessionStorage.setItem("currentResults", JSON.stringify(currentResults));
    localStorage.setItem("cancerSearchHistory", JSON.stringify(searchHistory));
}

function clearSearch() {
    searchBar.value = "";
    results.innerHTML = `
        <div class="empty-state">
            <div class="empty-state-icon">🔍</div>
            <h3>Ready to Search</h3>
            <p>Enter a cancer type above to find the latest research articles and detailed information</p>
        </div>
    `;
    currentResults = [];
    sessionStorage.removeItem("currentResults");
}

// ---------- Render Functions ----------
function createCancerCard(data) {
    return `
        <div class="cancer-card" onclick="toggleCard(this)">
            <div class="cancer-card-header">
                <img src="${data.image}" 
                     alt="${data.name}" 
                     class="cancer-card-image" 
                     data-img="${data.image}" 
                     data-alt="${data.name}">
                <div class="cancer-card-overlay">
                    <h2 class="cancer-card-title">${data.name}</h2>
                    <p class="cancer-card-subtitle">${data.subtitle}</p>
                </div>
                <div class="expand-indicator">▼</div>
            </div>
            <div class="cancer-card-content">
                <div class="cancer-section">
                    <h3>🔬 Causes</h3>
                    <ul>${data.causes.map(c => `<li>${c}</li>`).join("")}</ul>
                </div>
                <div class="cancer-section">
                    <h3>⚠️ Risk Factors</h3>
                    <ul>${data.riskFactors.map(r => `<li>${r}</li>`).join("")}</ul>
                </div>
                <div class="cancer-section">
                    <h3>🩺 Symptoms</h3>
                    <ul>${data.symptoms.map(s => `<li>${s}</li>`).join("")}</ul>
                </div>
                <div class="cancer-section">
                    <h3>💊 Treatment</h3>
                    <ul>${data.treatment.map(t => `<li>${t}</li>`).join("")}</ul>
                </div>
                <div class="cancer-section">
                    <h3>🛡️ Prevention</h3>
                    <ul>${data.prevention.map(p => `<li>${p}</li>`).join("")}</ul>
                </div>
            </div>
        </div>
    `;
}

function createResultCard(article) {
    return `
        <div class="result-card">
            <h3 class="result-title">${article.title}</h3>
            <p class="result-authors"><strong>Authors:</strong> ${article.authors}</p>
            <div class="result-meta">
                <span class="result-journal">${article.journal}</span>
                <span class="result-date">${article.date}</span>
            </div>
            <p class="result-summary">${article.summary.slice(0, 300)}${article.summary.length > 300 ? "..." : ""}</p>
            <a href="https://pubmed.ncbi.nlm.nih.gov/${article.id}/" target="_blank" class="pubmed-link">
                📖 Read Full Article on PubMed
            </a>
        </div>
    `;
}

function toggleCard(card) {
    card.classList.toggle("expanded");
}

function displayResults(resultsData) {
    results.innerHTML = "";
    resultsData.forEach(result => {
        results.innerHTML += result;
    });

    // ✅ Add image click listeners for modal view
    document.querySelectorAll(".cancer-card-image").forEach(img => {
        img.addEventListener("click", function (e) {
            e.stopPropagation(); // prevent card toggle
            openImage(this.dataset.img, this.dataset.alt);
        });
    });
}

// ---------- PubMed API Fetch ----------
async function fetchArticles(query) {
    try {
        loadingSpinner.style.display = "block";
        results.innerHTML = "";

        // Step 1: Search IDs
        const searchUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${encodeURIComponent(
            query
        )}&retmode=json&retmax=5&api_key=${apiKey}`;
        const searchRes = await fetch(searchUrl);
        const searchData = await searchRes.json();
        const ids = searchData.esearchresult.idlist;

        if (!ids || ids.length === 0) {
            results.innerHTML = "<p>No articles found.</p>";
            loadingSpinner.style.display = "none";
            return;
        }

        // Step 2: Fetch Details
        const fetchUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&id=${ids.join(
            ","
        )}&retmode=xml&rettype=abstract&api_key=${apiKey}`;
        const fetchRes = await fetch(fetchUrl);
        const xmlText = await fetchRes.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "text/xml");

        const articles = xmlDoc.getElementsByTagName("PubmedArticle");
        const pubmedResults = [];

        for (let i = 0; i < articles.length; i++) {
            const articleNode = articles[i];
            const id = ids[i];
            const title = articleNode.getElementsByTagName("ArticleTitle")[0]?.textContent || "No title";
            const abstract = articleNode.getElementsByTagName("AbstractText")[0]?.textContent || "No abstract available";
            const journal = articleNode.getElementsByTagName("Title")[0]?.textContent || "Unknown journal";
            const date = articleNode.getElementsByTagName("PubDate")[0]?.textContent || "Unknown date";

            const authorsNodes = articleNode.getElementsByTagName("Author");
            let authors = [];
            for (let j = 0; j < authorsNodes.length; j++) {
                const lastName = authorsNodes[j].getElementsByTagName("LastName")[0]?.textContent;
                const foreName = authorsNodes[j].getElementsByTagName("ForeName")[0]?.textContent;
                if (lastName && foreName) {
                    authors.push(`${foreName} ${lastName}`);
                }
            }
            authors = authors.length > 0 ? authors.join(", ") : "Unknown authors";

            pubmedResults.push(
                createResultCard({
                    id,
                    title,
                    authors,
                    journal,
                    date,
                    summary: abstract
                })
            );
        }

        currentResults = currentResults.concat(pubmedResults);
        displayResults(currentResults);
        saveToStorage();
        loadingSpinner.style.display = "none";
    } catch (err) {
        console.error("API Error:", err);
        results.innerHTML = `
            <div class="result-card">
                <h3>⚠️ Error Loading Articles</h3>
                <p>Unable to fetch articles from PubMed at the moment. Please try again later.</p>
            </div>
        `;
        loadingSpinner.style.display = "none";
    }
}

// ---------- Search Handler ----------
function performSearch() {
    const query = searchBar.value.trim().toLowerCase();
    if (!query) return;

    if (!searchHistory.includes(query)) {
        searchHistory.unshift(query);
        if (searchHistory.length > 10) searchHistory.pop();
    }

    currentResults = [];
    results.innerHTML = "";

    // Check local data first
    const localData =
        skinCancerData[query] ||
        Object.values(skinCancerData).find(data => data.name.toLowerCase().includes(query));

    if (localData) {
        const cancerCard = createCancerCard(localData);
        currentResults.push(cancerCard);
        results.innerHTML += cancerCard;

        // Also fetch PubMed
        fetchArticles(localData.name);
    } else {
        fetchArticles(query);
    }

    saveToStorage();
}

// ---------- Event Listeners ----------
searchBar.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        performSearch();
    }
});

// ---------- Image Modal ----------
function openImage(src, alt) {
    const modal = document.createElement("div");
    modal.className = "image-modal";
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <img src="${src}" alt="${alt}">
        </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector(".close-btn").onclick = () => modal.remove();
    modal.onclick = e => {
        if (e.target === modal) modal.remove();
    };
}
