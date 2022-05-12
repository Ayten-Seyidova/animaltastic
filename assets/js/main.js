"use strict"

$(() => {
    var animalArr = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish",
        "bird", "ferret", "turtle", "sugar glider", "chinchilla",
        "hedgehog", "hermit crab", "gerbil", "pygmy goat", "chicken",
        "capybara", "teacup pig", "serval", "salamander", "frog"];

    let btnSection = $("#btnSection");
    let addInput = $("#addInput");
    let addBtn = $("#addBtn");
    let imgSection = $("#imgSection");
    let limit = 10;

    let createBtn = animalArr => {
        for (let item of animalArr) {
            let btn = $("<button>").addClass("animal-btn").text(item);
            btnSection.append(btn);
        }
    }
    createBtn(animalArr);

    addBtn.on("click", () => {
        animalArr.push(addInput.val());
        btnSection.text("");
        createBtn(animalArr)
    })

    $(document).on("click", ".animal-btn", function () {
        imgSection.text("");
        let animal = $(this).text();
        const showImg = {
            "async": true,
            "crossDomain": true,
            "url": `https://api.giphy.com/v1/gifs/search?api_key=FtEIXrUBIG3EySx7Y3oE8NFT51IbPkvk&q=${animal}&limit=${limit}&offset=0&rating=g&lang=en`,
            "method": "GET",
        };

        $.ajax(showImg).done(function (response) {
            for (let i = 0; i < limit; i++) {
                let data = response.data[i]
                let x = $("<img>");
                x.attr("src", data.images.original.url).addClass("img-thumbnail");
                imgSection.append(x);
            }

        });
    })

})
