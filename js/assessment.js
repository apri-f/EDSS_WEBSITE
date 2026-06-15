document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("assessmentForm");
    const progressBar = document.getElementById("progressBar");
    const progressPercent =
    document.getElementById("progressPercent");
    const submitButton = document.getElementById("submitAssessment");

    const TOTAL_QUESTIONS = 9;

    function updateProgress() {

        let answered = 0;

        for (let i = 1; i <= TOTAL_QUESTIONS; i++) {

            const selected = document.querySelector(
                `input[name="q${i}"]:checked`
            );

            if (selected) answered++;
        }

        const percent =
            Math.round(
                (answered / TOTAL_QUESTIONS) * 100
            );

        progressBar.style.width = `${percent}%`;
        progressPercent.textContent = `${percent}%`;
    }

    form.addEventListener(
        "change",
        updateProgress
    );

    submitButton.addEventListener(
        "click",
        async () => {

            const data = {};

            for (let i = 1; i <= TOTAL_QUESTIONS; i++) {

                const selected =
                    document.querySelector(
                        `input[name="q${i}"]:checked`
                    );

                if (!selected) {

                    alert(
                        `Pertanyaan ${i} belum dijawab.`
                    );

                    return;
                }

                data[`Q${i}`] =
                    Number(selected.value);
            }

            try {

                submitButton.disabled = true;

                submitButton.textContent =
                    "Menganalisis...";

                const response =
                    await fetch(
                        "https://edssprojectbackend-production.up.railway.app/predict",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type":
                                    "application/json"
                            },
                            body: JSON.stringify(data)
                        }
                    );

                const result =
                    await response.json();

                localStorage.setItem(
                    "assessmentResult",
                    JSON.stringify(result)
                );

                window.location.href =
                    "result.html";

            } catch (error) {

                console.error(error);

                alert(
                    "Gagal terhubung ke server."
                );

                submitButton.disabled = false;

                submitButton.textContent =
                    "Kirim Asesmen";
            }
        }
    );

});
