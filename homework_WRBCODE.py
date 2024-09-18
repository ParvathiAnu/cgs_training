s = input("Enter a string: ")
mb = 0
lst = list(s.lower())  # Convert the string to lowercase and then to a list

if lst[0] == 'w':
    for i in range(1, len(lst)):
        if lst[i] == 'r' or lst[i] == 'b':
            index = i
            value = lst[i]
            break

    for i in range(0, index):
        lst[i] = value

for i in range(1, len(lst)):
    if lst[i] == 'w':
        lst[i] = lst[i - 1]

index = 0
for i in range(1, len(s)):
    if lst[index] != lst[i]:
        mb += 1
    index += 1

print(mb)
