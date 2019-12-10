"use strict";

import "../styles/styles.scss";

const { Elm } = require("../elm/Main");
var app = Elm.Main.init({ node: document.querySelector("elm-simple") });
