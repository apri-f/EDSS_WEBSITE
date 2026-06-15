document.addEventListener("DOMContentLoaded", () => {

       console.log("RESULT JS LOADED");

    const result = JSON.parse(
        localStorage.getItem("assessmentResult")
    );

    console.log("Assessment Result:", result);

    if (!result) {

    alert(
        "Please complete the assessment first."
    );

    window.location.href =
        "assessment.html";

    return;
    }

    if (!result) {

        alert(
            "Data assessment tidak ditemukan. Silakan isi assessment terlebih dahulu."
        );

        window.location.href = "assessment.html";

        return;
    }

    const severityText =
        document.getElementById("severityText");

    const descriptionText =
        document.getElementById("descriptionText");

    const severityBar =
        document.getElementById("severityBar");

    const severityPercent =
        document.getElementById("severityPercent");

    const recommendationsContainer =
        document.getElementById(
            "recommendationsContainer"
        );

    // ==========================
    // Severity
    // ==========================

    if (severityText) {
        severityText.textContent =
            result.severity;
    }

    if (descriptionText) {
        descriptionText.textContent =
            result.description;
    }

    // ==========================
    // Progress Bar Mapping
    // ==========================

    const severityMap = {
    "Minimal": 20,
    "Ringan": 40,
    "Sedang": 60,
    "Cukup Berat": 80,
    "Berat": 100
    };

    const percentage =
        severityMap[result.severity] || 0;

    if (severityBar) {
        severityBar.style.width =
            percentage + "%";
    }

    if (severityPercent) {
        severityPercent.textContent =
            percentage + "%";
    }

    // ==========================
    // Recommendations
    // ==========================

    if (
        recommendationsContainer &&
        result.suggestions
    ) {

        recommendationsContainer.innerHTML = "";

        result.suggestions.forEach(
            (item, index) => {

                recommendationsContainer.innerHTML += `

                <div class="glass-panel p-lg rounded-2xl hover:shadow-lg transition-all duration-300">

                    <div class="flex items-start gap-md">

                        <div
                            class="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed flex-shrink-0"
                        >
                            <span class="material-symbols-outlined">
                                check_circle
                            </span>
                        </div>

                        <div>

                            <h4
                                class="font-bold text-on-surface mb-xs"
                            >
                                Recommendation ${index + 1}
                            </h4>

                            <p
                                class="text-label-md text-on-surface-variant leading-relaxed"
                            >
                                ${item}
                            </p>

                        </div>

                    </div>

                </div>

                `;
            }
        );
    }

});