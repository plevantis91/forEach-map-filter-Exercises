def print_upper_words(words):
    """"Print each word as uppercased and a sep. line
    - print_upper_words(["hello", "hey", "goodbye"])
    HELLO
    HEY
    GOODBYE
    """
    for word in words:
        print(word.upper())

print_upper_words(["hello", "hey", "goodbye"])

def print_e_words(words):
    """Print each word that starts with E or e on a sep line & uppercased
    - print_e_word(["eggs", "eggplant", "avocado"])
    EGGS
    EGGPLANT
    """
    for word in words:
        if word.startswith("e") or word.startswith("E"):
            print(word.upper())

print_e_words(["eggs", "eggplant", "avocado"])

def print_upper_word2(words,first_letter):
    """Print each word on sep line & uppercased, based on the first letter
    - print_upper_word2(["ford", "Ferrari", "toyota", "Telsa", "bmw", "honda"],["F","T","f] )
    FORD
    FERRARI
    TELSA
    """

    for word in words:
        for char in first_letter:
            if word.startswith(char):
                print(word.upper())
               

print_upper_word2(["ford", "Ferrari", "toyota", "Telsa", "bmw", "honda"],["F","T","f"] )