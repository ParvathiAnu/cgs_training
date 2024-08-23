prime = int(input("Enter a number: "))

if prime < 1:
    print("The number is not a prime.")
else:
    flag = True
    for i in range(2, prime):
        if prime % i == 0:
            flag = False
            break
    
    if flag == True:
        print("The number is prime")
    else:
        print("The number is not a prime")
