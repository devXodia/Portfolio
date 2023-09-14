import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss'],
})
export class ContactSectionComponent {
  constructor(private renderer: Renderer2) {}

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    this.disableInputs(
      this.nameField,
      this.emailField,
      this.messageField,
      this.sendButton
    );

    let fd = new FormData();

    fd.append('name', nameField.value);
    fd.append('message', messageField.value);
    await fetch('https://alen-alduk.com/send_mail/send_mail.php', {
      method: 'POST',
      body: fd,
    });

    this.enableInputs(
      this.nameField,
      this.emailField,
      this.messageField,
      this.sendButton
    );
    sendButton.innerText = 'Message sent!';
    setTimeout(() => {
      sendButton.innerText = 'Send message :)';
      this.removeClasses();
      nameField.value = '';
      emailField.value = '';
      messageField.value = '';
    }, 3000);
  }

  onKeyDown(event: KeyboardEvent) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.value.length > 0) {
      this.renderer.addClass(inputElement, 'background-image-green');
      this.renderer.removeClass(inputElement, 'background-image-red');
    } else {
      this.renderer.addClass(inputElement, 'background-image-red');
      this.renderer.removeClass(inputElement, 'background-image-green');
    }
  }

  removeClasses() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    this.renderer.removeClass(nameField, 'background-image-green');
    this.renderer.removeClass(emailField, 'background-image-green');
    this.renderer.removeClass(messageField, 'background-image-green');
  }

  disableInputs(nameField, emailField, messageField, sendButton) {
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
  }

  enableInputs(nameField, emailField, messageField, sendButton) {
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }
}
