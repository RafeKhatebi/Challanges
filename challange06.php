<?php
class Person
{
    public $name;

    function __construct($name)
    {
        $this->name = $name; // $this به شیء فعلی اشاره می‌کند
    }

    function greet()
    {
        echo "Hello, my name is " . $this->name;
    }
}

$alice = new Person("Alice");
$alice->greet(); // Hello, my name is Alice
?>