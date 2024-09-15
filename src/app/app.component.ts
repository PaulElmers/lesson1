import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
//1.1
export class AppComponent {
  message: string = 'Привіт, світ!';
}
//1.2
export class AppComponent {
  title: string = 'Angular компонент';
}
//1.3
export class AppComponent {
  getWelcomeMessage(): string {
    return 'Ласкаво просимо на сайт!';
  }
//1.4
}
export class AppComponent {
  age: number = 25;
}
//1.5
export class AppComponent {
  user = {
    name: 'Іван',
    age: 30
  };
}
//1.6
enum Status {
  Active = 'Активний',
  Inactive = 'Неактивний'
}

export class AppComponent {
  currentStatus: Status = Status.Active;
}
//1.7
export class AppComponent {
  textValue: string = 'Текстовий рядок';
}
//1.8
export class AppComponent {
  calculateTotal(): number {
    return 50 + 20;
  }
}
//1.9
export class AppComponent {
  userInput: string = '';
}
//1.10
export class AppComponent {
  data: string = '';

  ngOnInit() {
    this.fetchData();
  }

  async fetchData() {
    this.data = await this.getDataFromAPI();
  }

  getDataFromAPI(): Promise<string> {
    return new Promise(resolve => setTimeout(() => resolve('Дані отримані'), 2000));
  }
}

//2.1
export class AppComponent {
  inputValue: string = '';
}
//2.2
export class AppComponent {
  isChecked: boolean = false;
}
//2.3
export class AppComponent {
  handleClick() {
    alert('Кнопка натиснута!');
  }
}
//2.4
export class AppComponent {
  textValue: string = '';
}
//2.5
export class AppComponent {
  selectedOption: string = '';
}
//2.6
export class AppComponent {
  selectedValue: string = '';
}
//2.7
export class AppComponent {
  formData = {
    name: '',
    age: null
  };
}
//2.8
export class AppComponent {
  onInputChange(event: any) {
    console.log('Змінено:', event.target.value);
  }
}
//2.9
export class AppComponent {
  selectedOption: string = '';
}
//2.10
export class AppComponent {
  onSubmit() {
    alert('Форма відправлена!');
  }
}
//3.1
export class AppComponent {
  text: string = 'Простий текст для відображення.';
}
//3.2
export class AppComponent {
  greeting: string = 'Привіт, світе!';
}
//3.3
export class AppComponent {
  getGreeting(): string {
    return 'Доброго дня!';
  }
}
//3.4
export class AppComponent {
  score: number = 85;
}
//3.5
export class AppComponent {
  message: string = 'Це повідомлення!';
}
//3.6
export class AppComponent {
  calculateTotal(): number {
    return 25 + 75;
  }
}
//3.7
enum Colors {
  Red = 'Червоний',
  Green = 'Зелений',
  Blue = 'Синій'
}

export class AppComponent {
  selectedColor: Colors = Colors.Green;
}
//3.8
export class AppComponent {
  car = {
    make: 'Tesla',
    model: 'Model S'
  };
}
//3.9
export class AppComponent {
  data: string = '';

  ngOnInit() {
    this.fetchData();
  }

  async fetchData() {
    this.data = await this.getDataFromAPI();
  }

  getDataFromAPI(): Promise<string> {
    return new Promise(resolve => {
      setTimeout(() => resolve('Дані з сервера отримані'), 2000);
    });
  }
}
//3.10
export class AppComponent {
  formData = {
    name: '',
    age: null
  };
}
