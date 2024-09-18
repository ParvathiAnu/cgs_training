a=int(input("enter a number"))#10
b=int(input("enter another number"))#5
print("before swap", a,b)
a=a*b # 10*5=50
b=a//b# 50//5=10
a=a//b# 50//10=5
print("after swap",a,b)
