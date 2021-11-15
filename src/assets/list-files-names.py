from os import walk

def listfilenames():
  filenames = next(walk('./img'), (None, None, []))[2]  # [] if no file

  with open("files-list.txt", "w") as file:
    file.write(','.join([str(line) for line in filenames]))

if __name__ == "__main__":
  listfilenames()
