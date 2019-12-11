module Example exposing (fuzzTest, unitTest, viewTest)

import Expect exposing (Expectation)
import Fuzz exposing (Fuzzer, int, list, string)
import Main exposing (..)
import Test exposing (..)
import Test.Html.Query as Query
import Test.Html.Selector exposing (tag, text)


{-| See <https://github.com/elm-community/elm-test>
-}
unitTest : Test
unitTest =
    describe "simple unit test"
        [ test "Inc adds one" <|
            \() ->
                update Increment (Model 0)
                    |> .count
                    |> Expect.equal 1
        ]


{-| See <https://github.com/elm-community/elm-test>
-}
fuzzTest : Test
fuzzTest =
    describe "simple fuzz test"
        [ fuzz int "Inc ALWAYS adds one" <|
            \ct ->
                update Increment (Model ct)
                    |> .count
                    |> Expect.equal (ct + 1)
        ]


{-| see <https://github.com/eeue56/elm-html-test>
-}
viewTest : Test
viewTest =
    describe "Testing view function"
        [ test "Button has the expected text" <|
            \() ->
                Model 0
                    |> view
                    |> Query.fromHtml
                    |> Query.findAll [ tag "button" ]
                    |> Query.first
                    |> Query.has [ text "+1" ]
        ]
