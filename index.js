document.addEventListener("DOMContentLoaded", () => {
  const selectsData = [
    {
      id: "#select-firstDay",
      params: {
        name: "First Day",
        targetValue: "Monday",
        options: [
          ["Monday", "Monday"],
          ["Sunday", "Sunday"],
          ["Sistem", "Sistem"],
        ],
        onSelected(select, option) {
          const text = option ? option.textContent : "";
          localStorage.setItem(
            JSON.stringify("select-firstDay"),
            JSON.stringify(text)
          );
        },
      },
    },
    {
      id: "#select-containerWidth",
      params: {
        name: "Container Width",
        targetValue: "Fixed",
        options: [
          ["Fixed", "Fixed"],
          ["Relative", "Relative"],
        ],
        onSelected(select, option) {
          const text = option ? option.textContent : "";
          localStorage.setItem(
            JSON.stringify("select-containerWidth"),
            JSON.stringify(text)
          );
        },
      },
    },
    {
      id: "#select-homepage",
      params: {
        name: "Homepage",
        targetValue: "Starred Projects",
        options: [
          ["Starred Projects", "Starred Projects"],
          ["Sistem", "Sistem"],
        ],
        onSelected(select, option) {
          const text = option ? option.textContent : "";
          localStorage.setItem(
            JSON.stringify("select-homepage"),
            JSON.stringify(text)
          );
        },
      },
    },
  ];

  selectsData.forEach((el) => {
    ItcCustomSelect.create(el.id, el.params);

    const selectValue = localStorage.getItem(JSON.stringify(el.id.slice(1)));

    if (JSON.parse(selectValue)?.length && el.id.slice(1).length) {
      document
        .querySelector(el.id)
        .querySelector(".itc-select__toggle").textContent =
        JSON.parse(selectValue);
    }
  });

  const inputsIds = [
    "companyTitle",
    "indentSize",
    "personalCodeOne",
    "personalCodeTwo",
    "personalCodeThre",
  ];

  inputsIds
    .map((id) => document.getElementById(id))
    .forEach((el) => {
      el.addEventListener("input", (e) => {
        localStorage.setItem(
          JSON.stringify(e.target.id),
          JSON.stringify(e.target.value)
        );
      });

      const targetElementValue = localStorage.getItem(JSON.stringify(el.id));

      if (JSON.parse(targetElementValue)?.length) {
        el.value = JSON.parse(targetElementValue);
      }
    });

  document.getElementById("btnClancel").onclick = function () {
    localStorage.clear();

    inputsIds.forEach((el) => {
      document.getElementById(el).value = "";
    });

    selectsData.forEach((el) => {
      document.querySelector(el.id);
    });
  };

  const htmlTag = document.getElementsByTagName("html")[0];
  document.getElementById("btnSave").addEventListener("click", () => {
    if (document.getElementById("ligthTheme").checked) {
      localStorage.setItem("ligthTheme", "true");

      htmlTag.removeAttribute("data-theme");
    } else {
      localStorage.setItem("ligthTheme", "false");
      htmlTag.setAttribute("data-theme", "dark");
    }
  });
  const theme = localStorage.getItem("ligthTheme");
  if (theme === "true") {
    htmlTag.removeAttribute("data-theme");
  } else {
    htmlTag.setAttribute("data-theme", "dark");
    document.getElementById("darkTheme").checked = true;
  }
});
