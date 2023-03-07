# Lego Task

## Prerequisites

To run the applications locally you need to setup environment with the following technologies:

- [Node.js](https://nodejs.org/en/) - v16.10.0 or higher
- [Yarn](https://classic.yarnpkg.com/lang/en/) - v1
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/) - compatible with Expo SDK v48
- [Expo Go](https://expo.dev/client/) - compatible with Expo SDK v48

## How To Start Locally

1. Clone the application to your local machine.
2. Go to the repository root directory.
3. Install the dependencies and devDependencies by running the command in the terminal:

```sh
$ yarn install
```

4. Setup environment variables:
- `MOCK_API_BASE_URL` is not implemented and call to this endpoint will throw an error (settled state is handled).
- `REBRICKABLE_API_KEY` can be generated in user settings [link available on this page](https://rebrickable.com/api/).

**Important!** Registration in `rebrickable.com` is required.

5. Run the command in the terminal to start the server:

```sh
$ yarn start
```

6. Select the platform:

```sh
› Press a │ open Android
› Press i │ open iOS simulator
› Press w │ open web
```

## Used Technologies

### Libraries

- React
- React Native
- Expo
- React Query
- Expo Router
- NativeBase
- XState
- axios

### Tools

- Husky
- Prettier
- ESLint
- Commitlint
- TypeScript

## Tested On

### iOS

- iPhone 14 Pro Max - iOS 16.2 (Xcode Simulator)
- iPhone 12 mini - iOS 16.4 beta (real device)

### Android

- Nexus 5X API 33 (Android Studio Emulator)

## Possible Improvements (not applicable/required for recruitment task but for long term app development in real project)

- extract texts to separate file to easier migrate to i18n.

## Backlog

- create `/src` dir. Probably not possible with current version of `expo-router`.
- setup `baseUrl` in tsconfig to use absolute imports for nested directories.
- fix husky actions - re-add typecheck, apply scripts only to project dirs (exclude node_modules).
- improve keyboard behavior
- extend theme setup
- add better handler for mock API call
- improve type safety
- improve performance
- add custom error messages to form validation
- fix navigation bar (Android) when modal is open
- add fields config dedicated to input requirements e.g. specific keyboard type
- add unit and E2E tests based on [proposals](#test-scenarios-proposals).

## Test Scenarios Proposals

### Unit (Jest + React Native Testing Library)

- yup validation for the personal details form
- XState machine flow
- `DataPageTemplate` based on status change

### E2E (Detox)

- full flow: select minifig, provide personal details, submit
