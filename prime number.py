prime=int(input("enter a number"))
flag=True
for i in range(2,prime):
    if prime%i==0:
        flag=False
        break
if flag  ==True:
    print("the number is prime")
else:
    print("the number is not a prime")
