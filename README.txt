# Arpabet 

## Introduction

> This library takes a sentence and translates it into the closest command in our perceived state

> Take file folder and put into whatever project you are working on and use it as a normal library

## Code Samples

>How to include in html index 
```
<head>
    <script src="LevensteinDistance.js"></script>
    <script src="Map.js"></script>
    <script src="Arpabet.js"></script>
    <script src="CommandGeneration.js"></script>
</head>
```

>How to use the library
```
>var Arpabet = new Arpabet();
>// where utterance is the command recognized by the speech recognition
>var closestCommand = Arpabet.Correct(utterance);
```
