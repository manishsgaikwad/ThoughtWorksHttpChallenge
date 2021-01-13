# ThoughtWorksHttpChallenge
Code for the ThoughtWorks challenge which is given when one wants to interview at ThoughtWorks.

Add your own 'userId'. Then run index.js to start the challenge.

<b>Challenge 1:</b>

```{
  "stage": "1/4",
  "statement": "Return the count of characters in the paragraph. Including spaces and punctuations.",
  "instructions": "You can 'GET' the input from /challenge/input and output should be 'POST' json to /challenge/output. Important note: The time between request 'GET' input and 'POST' requests should not exceed 2 secs.",
  "sampleInput": {
    "input": {
      "text": "This specification does not indicate the behavior, rendering or otherwise, of space characters other than those explicitly identified here as white space characters. For this reason, authors should use appropriate elements and styles to achieve visual formatting effects that involve white space, rather than space characters. For all HTML elements except PRE, sequences of white space separate 'words' (we use the term 'word' here to mean 'sequences of non-white space characters'). When formatting text, user agents should identify these words and lay them out according to the conventions of the particular written language (script) and target medium."
    }
  },
  "sampleOutput": {
    "output": {
      "count": 654
    }
  }
}
```
<b>Challenge 2:</b>
```  
  {
  "stage": "2/4",
  "statement": "Return the count of words in the paragraph.",
  "instructions": "You can 'GET' the input from /challenge/input and output should be 'POST' json to /challenge/output. Important note: The time between request 'GET' input and 'POST' requests should not exceed 2 secs.",
  "sampleInput": {
    "input": {
      "text": "Sunset is the time of day when our sky meets the outer space solar winds. There are blue, pink, and purple swirls, spinning and twisting, like clouds of balloons caught in a blender. The sun moves slowly to hide behind the line of horizon, while the moon races to take its place in prominence atop the night sky. People slow to a crawl, entranced, fully forgetting the deeds that still must be done. There is a coolness, a calmness, when the sun does set."
    }
  },
  "sampleOutput": {
    "output": {
      "wordCount": 84
    }
  }
}
```  
<b>Challenge 3:</b>  
  ```
{
  "stage": "3/4",
  "statement": "Return the number of sentences in a paragraph. Sentences are always terminated with either a full stop (.), a question mark (?) or an exclamation mark (!).  There will be a space after each sentence, except for the last one.",
  "instructions": "You can 'GET' the input from /challenge/input and output should be 'POST' json to /challenge/output. Important note: The time between request 'GET' input and 'POST' requests should not exceed 2 secs.",
  "sampleInput": {
    "input": {
      "text": "How often do you find yourself using an interrogation point in your everyday writing? What about an eroteme? You might be surprised to know that both of these appeared in the last two sentences. These terms might be unfamiliar, but you may know this punctuation mark by its more common name: the question mark. The question mark has a very simple function in writing—it indicates a question. If a sentence ends with a question mark, then it is asking a question, just as the name suggests."
    }
  },
  "sampleOutput": {
    "output": {
      "sentenceCount": 6
    }
  }
}
 ```
  
  
<b>Challenge 4:</b>  
  ```
{
  "stage": "4/4",
  "statement": "Return the number of vowels in the paragraph. Ex. {\"a\": 20, \"e\": 32, \"i\": 19, \"o\": 2, \"u\": 15}",
  "instructions": "You can 'GET' the input from /challenge/input and output should be 'POST' json to /challenge/output. Important note: The time between request 'GET' input and 'POST' requests should not exceed 2 secs.",
  "sampleInput": {
    "input": {
      "text": "Sunset is the time of day when our sky meets the outer space solar winds. There are blue, pink, and purple swirls, spinning and twisting, like clouds of balloons caught in a blender. The sun moves slowly to hide behind the line of horizon, while the moon races to take its place in prominence atop the night sky. People slow to a crawl, entranced, fully forgetting the deeds that still must be done. There is a coolness, a calmness, when the sun does set."
    }
  },
  "sampleOutput": {
    "output": {
      "a": 20,
      "e": 49,
      "i": 23,
      "o": 27,
      "u": 11
    }
  }
}
  ```
  
  
  
